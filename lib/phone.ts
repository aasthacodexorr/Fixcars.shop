/**
 * Utilities for Canadian and US phone number formatting and validation.
 * Standard North American Numbering Plan (NANP):
 * - Country Code: +1
 * - Display format: (XXX) XXX-XXXX (e.g. (905) 234-3313)
 * - Area code cannot begin with 0 or 1
 * - Central office / exchange code cannot begin with 0 or 1
 */

export interface PhoneFormatResult {
  formatted: string;
  error: string | null;
}

/**
 * Formats an incoming string as a Canada/US phone number while the user types or pastes.
 * Gracefully handles leading '+', '+1', and domestic '1' prefix.
 * Rejects non-US/Canada country codes (+44, +91, etc.).
 */
export function formatPhoneNumber(val: string): PhoneFormatResult {
  const raw = val.trim();

  // Empty input
  if (!raw) {
    return { formatted: "", error: null };
  }

  // Handle international prefix '+'
  if (raw.startsWith("+")) {
    if (raw === "+") {
      return { formatted: "+", error: null };
    }
    if (raw === "+1" || raw === "+1 ") {
      return { formatted: "+1 ", error: null };
    }
    // If it starts with + followed by anything other than 1, it's an unsupported foreign country code
    if (!raw.startsWith("+1")) {
      return {
        formatted: raw,
        error: "Only Canadian and US phone numbers (+1) are accepted.",
      };
    }
    // Has +1 prefix: extract local portion after '+1'
    const afterCountryCode = raw.slice(2).trimStart();
    const localDigits = afterCountryCode.replace(/\D/g, "");
    if (localDigits.length === 0) {
      return { formatted: "+1 ", error: null };
    }
    return formatDigits(localDigits);
  }

  // Handle standard number input without '+'
  const cleanDigits = raw.replace(/\D/g, "");

  // If user entered 11 digits starting with 1, or just typed domestic trunk '1'
  if (cleanDigits.length === 11 && cleanDigits.startsWith("1")) {
    return formatDigits(cleanDigits.slice(1));
  }
  if (cleanDigits === "1" && raw.startsWith("1")) {
    return { formatted: "+1 ", error: null };
  }
  if (cleanDigits.length > 10 && cleanDigits.startsWith("1")) {
    return formatDigits(cleanDigits.slice(1));
  }

  return formatDigits(cleanDigits);
}

/**
 * Helper to format 10 or fewer digits into NANP format (XXX) XXX-XXXX
 */
function formatDigits(digits: string): PhoneFormatResult {
  if (!digits) {
    return { formatted: "", error: null };
  }

  let error: string | null = null;

  // In Canada and US, valid area codes cannot begin with 0 or 1
  if (digits[0] === "0" || digits[0] === "1") {
    error = `Canada and US area codes cannot start with ${digits[0]}.`;
  }

  // Limit to 10 digits
  const trimmed = digits.slice(0, 10);

  let formatted = "";
  if (trimmed.length < 3) {
    formatted = `(${trimmed}`;
  } else if (trimmed.length === 3) {
    formatted = `(${trimmed}) `;
  } else if (trimmed.length < 6) {
    formatted = `(${trimmed.slice(0, 3)}) ${trimmed.slice(3)}`;
  } else if (trimmed.length === 6) {
    formatted = `(${trimmed.slice(0, 3)}) ${trimmed.slice(3)}-`;
  } else {
    formatted = `(${trimmed.slice(0, 3)}) ${trimmed.slice(3, 6)}-${trimmed.slice(6)}`;
  }

  return { formatted, error };
}

/**
 * Validates a Canada / US phone number for form submission.
 * Returns null if valid, or a user-friendly error message if invalid.
 */
export function validatePhoneNumber(val: string): string | null {
  if (!val || !val.trim()) {
    return "Please enter your phone number";
  }

  const raw = val.trim();

  // Rejection of foreign country codes
  if (raw.startsWith("+") && !raw.startsWith("+1")) {
    return "Only Canadian and US phone numbers (+1) are accepted.";
  }

  // Extract clean digits (stripping leading country code 1 if present)
  let clean = raw;
  if (clean.startsWith("+1")) {
    clean = clean.slice(2);
  }
  let digits = clean.replace(/\D/g, "");
  if (digits.length === 11 && digits.startsWith("1")) {
    digits = digits.slice(1);
  }

  if (digits.length < 10) {
    return "Please enter a complete 10-digit phone number: (XXX) XXX-XXXX";
  }

  if (digits.length > 10) {
    return "Phone number cannot exceed 10 digits.";
  }

  // NANP Area Code validation: first digit cannot be 0 or 1
  if (digits[0] === "0" || digits[0] === "1") {
    return "Invalid area code. Canada and US area codes cannot start with 0 or 1.";
  }

  // NANP Central Office (exchange) code: first digit cannot be 0 or 1
  if (digits[3] === "0" || digits[3] === "1") {
    return "Please enter a valid Canada or US phone number.";
  }

  return null;
}

/**
 * Normalizes any phone number into canonical (XXX) XXX-XXXX format.
 * Returns null if the phone number is not a valid Canada/US 10-digit number.
 */
export function normalizePhoneNumber(val: string): string | null {
  if (validatePhoneNumber(val) !== null) {
    return null;
  }

  let raw = val.trim();
  if (raw.startsWith("+1")) {
    raw = raw.slice(2);
  }
  let digits = raw.replace(/\D/g, "");
  if (digits.length === 11 && digits.startsWith("1")) {
    digits = digits.slice(1);
  }

  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
}

/**
 * Calculates updated cursor position after formatting to provide smooth typing UX.
 */
export function calculateCursorPosition(
  rawInputValue: string,
  rawCursorPos: number,
  formattedValue: string
): number {
  let isLeadingCountryCode = false;
  const rawTrimmed = rawInputValue.trim();
  const digitsOnly = rawTrimmed.replace(/\D/g, "");

  if (
    rawTrimmed.startsWith("+1") ||
    (digitsOnly.length === 11 && digitsOnly.startsWith("1"))
  ) {
    isLeadingCountryCode = true;
  }

  let digitsBefore = 0;
  for (let i = 0; i < rawCursorPos && i < rawInputValue.length; i++) {
    if (/\d/.test(rawInputValue[i])) {
      digitsBefore++;
    }
  }

  if (isLeadingCountryCode && digitsBefore > 0) {
    digitsBefore -= 1;
  }

  if (digitsBefore === 0) {
    if (formattedValue.startsWith("+1 ")) return 3;
    if (formattedValue.startsWith("+")) return 1;
    return formattedValue.startsWith("(") ? 2 : 0;
  }

  let digitCount = 0;
  for (let i = 0; i < formattedValue.length; i++) {
    if (/\d/.test(formattedValue[i])) {
      digitCount++;
      if (digitCount === digitsBefore) {
        let nextPos = i + 1;
        if (formattedValue.slice(nextPos).startsWith(") ")) {
          nextPos += 2;
        } else if (formattedValue.slice(nextPos).startsWith("-")) {
          nextPos += 1;
        }
        return nextPos;
      }
    }
  }

  return formattedValue.length;
}

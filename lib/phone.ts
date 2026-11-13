/**
 * Utilities for phone number formatting and validation.
 * Displays numbers in Canada/US standard format: (XXX) XXX-XXXX
 * Optionally accepts international country code prefix (e.g. +1, +44, +91).
 * Accepts exactly 10 national digits.
 */

export interface PhoneFormatResult {
  formatted: string;
  error: string | null;
}

export interface ParsedPhone {
  countryCode: string | null;
  nationalDigits: string;
  isPlusOnly: boolean;
}

/**
 * Parses any phone string into country code and up to 10 national digits.
 */
export function parsePhone(val: string): ParsedPhone {
  const raw = val.trim();
  if (!raw) {
    return { countryCode: null, nationalDigits: "", isPlusOnly: false };
  }

  if (raw === "+") {
    return { countryCode: "", nationalDigits: "", isPlusOnly: true };
  }

  if (raw.startsWith("+")) {
    const afterPlus = raw.slice(1);

    // North American country code +1
    if (afterPlus.startsWith("1")) {
      const rest = afterPlus.slice(1);
      const digits = rest.replace(/\D/g, "").slice(0, 10);
      return { countryCode: "1", nationalDigits: digits, isPlusOnly: false };
    }

    // Check if user separated country code with space, hyphen, or paren (e.g. +44 123..., +91-...)
    const sepMatch = afterPlus.match(/^(\d{1,4})[\s\-().]/);
    if (sepMatch) {
      const cc = sepMatch[1];
      const rest = afterPlus.slice(cc.length);
      const digits = rest.replace(/\D/g, "").slice(0, 10);
      return { countryCode: cc, nationalDigits: digits, isPlusOnly: false };
    }

    // No separator yet: user is typing digits right after '+'
    const allDigits = afterPlus.replace(/\D/g, "");
    if (allDigits.length <= 3) {
      return { countryCode: allDigits, nationalDigits: "", isPlusOnly: false };
    }

    // Default to 2-digit country code when 4+ digits typed without separator
    const cc = allDigits.slice(0, 2);
    const digits = allDigits.slice(2).slice(0, 10);
    return { countryCode: cc, nationalDigits: digits, isPlusOnly: false };
  }

  // No leading '+'
  const cleanDigits = raw.replace(/\D/g, "");

  // If 11 digits starting with domestic trunk '1' (e.g. 19052343313)
  if (cleanDigits.length === 11 && cleanDigits.startsWith("1")) {
    return {
      countryCode: "1",
      nationalDigits: cleanDigits.slice(1, 11),
      isPlusOnly: false,
    };
  }

  // Standard domestic 10 digits max
  return {
    countryCode: null,
    nationalDigits: cleanDigits.slice(0, 10),
    isPlusOnly: false,
  };
}

/**
 * Formats an incoming string with optional +country code and Canada/US style (XXX) XXX-XXXX.
 */
export function formatPhoneNumber(val: string): PhoneFormatResult {
  if (!val) {
    return { formatted: "", error: null };
  }

  const { countryCode, nationalDigits, isPlusOnly } = parsePhone(val);

  if (isPlusOnly) {
    return { formatted: "+", error: null };
  }

  // Build national formatted portion: (XXX) XXX-XXXX
  const formattedNational = formatNationalDigits(nationalDigits);

  if (countryCode !== null) {
    if (!nationalDigits) {
      return { formatted: `+${countryCode} `, error: null };
    }
    return { formatted: `+${countryCode} ${formattedNational}`, error: null };
  }

  return { formatted: formattedNational, error: null };
}

/**
 * Formats up to 10 national digits into (XXX) XXX-XXXX format
 */
function formatNationalDigits(trimmed: string): string {
  if (!trimmed) {
    return "";
  }

  if (trimmed.length < 3) {
    return `(${trimmed}`;
  } else if (trimmed.length === 3) {
    return `(${trimmed}) `;
  } else if (trimmed.length < 6) {
    return `(${trimmed.slice(0, 3)}) ${trimmed.slice(3)}`;
  } else if (trimmed.length === 6) {
    return `(${trimmed.slice(0, 3)}) ${trimmed.slice(3, 6)}-`;
  } else {
    return `(${trimmed.slice(0, 3)}) ${trimmed.slice(3, 6)}-${trimmed.slice(6)}`;
  }
}

/**
 * Validates a phone number for form submission.
 * Requires exactly 10 national digits.
 */
export function validatePhoneNumber(val: string): string | null {
  if (!val || !val.trim() || val.trim() === "+") {
    return "Please enter your phone number";
  }

  const { nationalDigits } = parsePhone(val);

  if (nationalDigits.length < 10) {
    return "Please enter a valid 10-digit phone number";
  }

  if (nationalDigits.length > 10) {
    return "Phone number cannot exceed 10 digits";
  }

  return null;
}

/**
 * Normalizes any phone number into canonical format:
 * `+<CC> (XXX) XXX-XXXX` or `(XXX) XXX-XXXX`
 */
export function normalizePhoneNumber(val: string): string | null {
  if (validatePhoneNumber(val) !== null) {
    return null;
  }

  const { countryCode, nationalDigits } = parsePhone(val);
  const formattedNational = `(${nationalDigits.slice(0, 3)}) ${nationalDigits.slice(3, 6)}-${nationalDigits.slice(6, 10)}`;

  if (countryCode) {
    return `+${countryCode} ${formattedNational}`;
  }

  return formattedNational;
}

/**
 * Calculates updated cursor position after formatting to provide smooth typing UX.
 */
export function calculateCursorPosition(
  rawInputValue: string,
  rawCursorPos: number,
  formattedValue: string
): number {
  if (!formattedValue) return 0;
  if (formattedValue === "+") return 1;

  let hadPlusBefore = false;
  let digitsBefore = 0;

  for (let i = 0; i < rawCursorPos && i < rawInputValue.length; i++) {
    if (rawInputValue[i] === "+") {
      hadPlusBefore = true;
    } else if (/\d/.test(rawInputValue[i])) {
      digitsBefore++;
    }
  }

  if (digitsBefore === 0) {
    if (hadPlusBefore && formattedValue.startsWith("+")) {
      return 1;
    }
    return formattedValue.startsWith("(") ? 1 : 0;
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
        } else if (formattedValue.slice(nextPos).startsWith(" ")) {
          nextPos += 1;
        }
        return nextPos;
      }
    }
  }

  return formattedValue.length;
}

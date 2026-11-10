"use client";

import { createContext, useCallback, useContext, useState } from "react";
import QuoteModal from "@/components/QuoteModal";
import { useExitIntent } from "@/components/useExitIntent";

const QuoteContext = createContext<() => void>(() => {});

// Lets the homepage sections stay server components: only the buttons that open
// the quote form need to be client code.
export function QuoteProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Shows once per page visit:
  // - after 5000ms (5 seconds)
  // - or on exit-intent (cursor to top / back button)
  useExitIntent({
    onTrigger: open,
    timerDelayMs: 5000,
  });

  return (
    <QuoteContext.Provider value={open}>
      {children}
      <QuoteModal isOpen={isOpen} onClose={close} />
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  return useContext(QuoteContext);
}

export function QuoteButton({
  className = "",
  children = "Get A Free Quote",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const open = useContext(QuoteContext);
  return (
    <button type="button" onClick={open} className={className}>
      {children}
    </button>
  );
}

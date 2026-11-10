"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

interface UseExitIntentOptions {
  onTrigger: () => void;
  timerDelayMs?: number; // 5000ms
}

export function useExitIntent({
  onTrigger,
  timerDelayMs = 5000,
}: UseExitIntentOptions) {
  const pathname = usePathname();
  const triggeredRef = useRef(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Reset triggered state whenever visiting a new page/route
    triggeredRef.current = false;

    if (typeof window === "undefined") return;

    // Clear legacy sessionStorage flags that might be blocking the browser
    try {
      sessionStorage.removeItem("cardora_popup_shown");
      sessionStorage.removeItem("cardora_exit_intent_shown");
    } catch {
      // Ignore sessionStorage exceptions
    }

    const trigger = () => {
      if (triggeredRef.current) return;
      triggeredRef.current = true;

      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }

      cleanupListeners();
      onTrigger();
    };

    // 1. Timed trigger: opens once after 5000ms (5 seconds) on this page
    timerRef.current = setTimeout(() => {
      trigger();
    }, timerDelayMs);

    // 2. Desktop exit-intent: cursor moving toward top of browser window
    const handleMouseOut = (e: MouseEvent) => {
      if (!e.relatedTarget && e.clientY <= 50) {
        trigger();
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY <= 30) {
        trigger();
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 50) {
        trigger();
      }
    };

    document.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    // 3. Mobile exit-intent: tapping back button
    let historyTimer: NodeJS.Timeout | null = null;
    historyTimer = setTimeout(() => {
      try {
        if (!triggeredRef.current) {
          window.history.pushState({ cardoraExitIntent: true }, "", window.location.href);
        }
      } catch {
        // Ignore history exceptions
      }
    }, 1000);

    const handlePopState = () => {
      if (!triggeredRef.current) {
        trigger();
      }
    };

    window.addEventListener("popstate", handlePopState);

    function cleanupListeners() {
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("popstate", handlePopState);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (historyTimer) clearTimeout(historyTimer);
      cleanupListeners();
    };
  }, [onTrigger, pathname, timerDelayMs]);
}

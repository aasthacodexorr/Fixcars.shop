"use client";

import { useEffect, useRef } from "react";
import { ChevronIcon } from "./ServiceIcon";
import { ServiceMenu } from "./ServiceMenu";
import { useDismissable } from "./useDismissable";

export default function ServicePicker() {
  const { isOpen, setIsOpen, ref } = useDismissable<HTMLDivElement>();
  const panel = useRef<HTMLDivElement>(null);

  // Bring the opened list fully into view if it starts low on the screen.
  useEffect(() => {
    if (isOpen) panel.current?.scrollIntoView({ block: "nearest" });
  }, [isOpen]);

  return (
    <div ref={ref} className="relative w-full">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="hero-services"
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-[52px] w-full cursor-pointer items-center justify-between gap-3 rounded-[10px] bg-white pl-5 pr-3 text-left text-[16px] text-gray-600 shadow-[0_2px_10px_rgba(0,0,0,0.05)]"
      >
        What does your car need?
        <span className="grid h-[34px] w-[60px] place-items-center rounded-[5px] bg-brand text-white">
          <ChevronIcon
            className={`size-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </span>
      </button>
      {isOpen && (
        <div
          id="hero-services"
          ref={panel}
          className="absolute inset-x-0 top-full z-30 mt-2 max-h-[70vh] scroll-mb-4 overflow-y-auto rounded-[12px] bg-white p-3 shadow-[0_18px_50px_rgba(0,0,0,0.22)]"
        >
          <ServiceMenu onNavigate={() => setIsOpen(false)} />
        </div>
      )}
    </div>
  );
}

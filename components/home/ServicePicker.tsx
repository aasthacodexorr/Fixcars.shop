"use client";

import { useEffect, useRef } from "react";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import { ChevronIcon, FaIcon } from "./ServiceIcon";
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
    <div ref={ref} className="relative min-w-0 flex-1">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="hero-services"
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-[52px] w-full cursor-pointer items-center gap-3 rounded-[12px] px-3 text-left text-[16px] font-medium text-black transition-colors hover:bg-pale"
      >
        <FaIcon icon={faWrench} className="size-[18px] shrink-0 text-brand" />
        <span className="flex-1">What does your car need?</span>
        <ChevronIcon
          className={`size-5 shrink-0 text-brand transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div
          id="hero-services"
          ref={panel}
          className="absolute inset-x-0 top-full z-30 mt-3 max-h-[70vh] sm:right-auto sm:w-[580px] scroll-mb-4 overflow-y-auto rounded-[12px] bg-white p-3 shadow-[0_18px_50px_rgba(0,0,0,0.22)]"
        >
          <ServiceMenu onNavigate={() => setIsOpen(false)} />
        </div>
      )}
    </div>
  );
}

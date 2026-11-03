"use client";

import { useRef } from "react";
import { ChevronIcon } from "./ServiceIcon";

const ARROW =
  "grid size-[42px] cursor-pointer place-items-center rounded-full bg-white text-black shadow-[0_2px_10px_rgba(0,0,0,0.18)] transition-colors hover:bg-brand hover:text-white";

// Cards are sized to fit the rail exactly, so none are ever cut off at the edge.
export default function ReviewRail({
  children,
}: {
  children: React.ReactNode;
}) {
  const rail = useRef<HTMLUListElement>(null);

  const move = (direction: 1 | -1) => {
    const el = rail.current;
    if (!el) return;
    const end = el.scrollWidth - el.clientWidth;
    const atEdge = direction === 1 ? el.scrollLeft >= end - 4 : el.scrollLeft <= 4;
    el.scrollTo({
      left: atEdge
        ? direction === 1
          ? 0
          : end
        : el.scrollLeft + direction * (el.clientWidth + 24),
      behavior: "smooth",
    });
  };

  return (
    <div className="relative mx-auto mt-8 max-w-[1240px] px-3.5 md:px-16">
      <ul
        ref={rail}
        className="no-scrollbar flex snap-x snap-mandatory items-stretch gap-6 overflow-x-auto py-2"
      >
        {children}
      </ul>
      <div className="mt-4 flex justify-center gap-4 md:mt-0 md:contents">
        <button
          type="button"
          aria-label="Previous reviews"
          onClick={() => move(-1)}
          className={`${ARROW} md:absolute md:left-3 md:top-1/2 md:-translate-y-1/2`}
        >
          <ChevronIcon className="size-5 rotate-90" />
        </button>
        <button
          type="button"
          aria-label="Next reviews"
          onClick={() => move(1)}
          className={`${ARROW} md:absolute md:right-3 md:top-1/2 md:-translate-y-1/2`}
        >
          <ChevronIcon className="size-5 -rotate-90" />
        </button>
      </div>
    </div>
  );
}

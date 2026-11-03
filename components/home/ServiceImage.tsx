"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { ServiceIconName } from "@/lib/site";

// Shows a still image and fades to its 3D animation loop on hover. Touch screens
// have no hover, so there it plays while the card is in the middle of the screen.
export default function ServiceImage({
  icon,
  alt,
}: {
  icon: ServiceIconName;
  alt: string;
}) {
  const box = useRef<HTMLSpanElement>(null);
  const loadedRef = useRef(false);
  const [loaded, setLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const animation = `/images/services/${icon}-anim.webp`;

  useEffect(() => {
    const element = box.current;
    if (
      !element ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const start = () => {
      setMounted(true);
      setVisible(true);
    };
    const stop = () => {
      setVisible(false);
      // With nothing on screen to fade out, there's no transition to wait for.
      if (!loadedRef.current) setMounted(false);
    };

    if (window.matchMedia("(hover: none)").matches) {
      const observer = new IntersectionObserver(
        ([entry]) => (entry.isIntersecting ? start() : stop()),
        { rootMargin: "-30% 0px -30% 0px" },
      );
      observer.observe(element);
      return () => observer.disconnect();
    }

    // Fetch the loop as the section nears the screen, so hovering plays instantly.
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;
    const preloader = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        preloader.disconnect();
        if (!connection?.saveData) new window.Image().src = animation;
      },
      { rootMargin: "500px 0px" },
    );
    preloader.observe(element);

    const card = element.closest("a") ?? element;
    card.addEventListener("pointerenter", start);
    card.addEventListener("pointerleave", stop);
    card.addEventListener("focusin", start);
    card.addEventListener("focusout", stop);
    return () => {
      preloader.disconnect();
      card.removeEventListener("pointerenter", start);
      card.removeEventListener("pointerleave", stop);
      card.removeEventListener("focusin", start);
      card.removeEventListener("focusout", stop);
    };
  }, [animation]);

  return (
    <span
      ref={box}
      className="relative block aspect-[8/5] overflow-hidden rounded-t-[14px] bg-pale"
    >
      <Image
        src={`/images/services/${icon}.webp`}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
        className="object-cover"
      />
      {mounted && (
        <Image
          src={animation}
          alt=""
          fill
          unoptimized
          onLoad={() => {
            loadedRef.current = true;
            setLoaded(true);
          }}
          onTransitionEnd={() => {
            if (visible) return;
            loadedRef.current = false;
            setLoaded(false);
            setMounted(false);
          }}
          style={{ opacity: visible && loaded ? 1 : 0 }}
          className="object-cover transition-opacity duration-200"
        />
      )}
    </span>
  );
}

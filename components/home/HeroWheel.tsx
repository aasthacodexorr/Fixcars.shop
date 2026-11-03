"use client";

import { Component, useCallback, useState, useSyncExternalStore } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

// three.js is large, so it loads separately after the page is interactive.
const WheelScene = dynamic(() => import("./WheelScene"), { ssr: false });

const noSubscribe = () => () => {};

// The wheel is desktop-only, so phones never download the 3D code.
const DESKTOP = "(min-width: 1024px)";
function subscribeToDesktop(onChange: () => void) {
  const query = window.matchMedia(DESKTOP);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

// Browsers allow only a few WebGL contexts at once, so test once and release it.
let webGLSupport: boolean | undefined;
function supportsWebGL() {
  if (webGLSupport === undefined) {
    try {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("webgl2") ?? canvas.getContext("webgl");
      webGLSupport = Boolean(context);
      context?.getExtension("WEBGL_lose_context")?.loseContext();
    } catch {
      webGLSupport = false;
    }
  }
  return webGLSupport;
}

class SceneBoundary extends Component<
  { children: React.ReactNode },
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

export default function HeroWheel() {
  const hasWebGL = useSyncExternalStore(noSubscribe, supportsWebGL, () => true);
  const isDesktop = useSyncExternalStore(
    subscribeToDesktop,
    () => window.matchMedia(DESKTOP).matches,
    () => false,
  );
  const [sceneReady, setSceneReady] = useState(false);
  const onReady = useCallback(() => setSceneReady(true), []);

  return (
    <div aria-hidden="true" className="absolute inset-0">
      {/* A still wheel shows until the 3D one is drawn, or if it can't run. */}
      {/* Already compressed, so it skips the image optimizer's first-visit delay.
          The media query stops phones, which never show it, from downloading it. */}
      <link
        rel="preload"
        as="image"
        href="/images/wheel-poster.webp"
        media="(min-width: 1024px)"
      />
      <Image
        src="/images/wheel-poster.webp"
        alt=""
        fill
        unoptimized
        className={`object-contain transition-opacity duration-500 ${sceneReady ? "opacity-0" : "opacity-100"}`}
      />
      {isDesktop && hasWebGL && (
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${sceneReady ? "opacity-100" : "opacity-0"}`}
        >
          <SceneBoundary>
            <WheelScene onReady={onReady} />
          </SceneBoundary>
        </div>
      )}
    </div>
  );
}

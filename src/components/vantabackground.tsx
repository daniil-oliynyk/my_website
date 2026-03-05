"use client";

import { useEffect, useRef } from "react";
import type * as THREEType from "three";

declare global {
  interface Window {
    THREE?: typeof THREEType;
  }
}

export function VantaBackground() {

  const vantaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let vantaEffect: { destroy: () => void } | null = null;

    const initVanta = async () => {
      if (!vantaRef.current) {
        return;
      }

      const threeModule = await import("three");
      const THREE: typeof THREEType =
        (threeModule as { default?: typeof THREEType }).default ?? (threeModule as typeof THREEType);
      const wavesModule = await import("vanta/dist/vanta.waves.min");
      const WAVES = wavesModule.default;

      window.THREE = THREE;

      vantaEffect = WAVES({
        THREE,
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x201a2a
      });
    };

    void initVanta();

    return () => {
      vantaEffect?.destroy();
    };
  }, []);

  return <div ref={vantaRef} id="vanta-background" className="absolute inset-0 h-screen w-screen" />;
}

export default VantaBackground;
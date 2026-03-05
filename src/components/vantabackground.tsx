"use client";

import { useEffect, useRef } from "react";

export function VantaBackground() {

  const vantaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let vantaEffect: { destroy: () => void } | null = null;

    const initVanta = async () => {
      if (!vantaRef.current) {
        return;
      }

      const THREE = await import("three");
      const wavesModule = await import("vanta/dist/vanta.waves.min");
      const WAVES = wavesModule.default;

      (window as Window & { THREE?: typeof THREE }).THREE = THREE;

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
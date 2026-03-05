declare module "vanta/dist/vanta.waves.min" {
  export type VantaEffect = {
    destroy: () => void;
  };

  export type VantaWavesOptions = {
    THREE: unknown;
    el: HTMLElement;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    color?: number;
    [key: string]: unknown;
  };

  export default function WAVES(options: VantaWavesOptions): VantaEffect;
}

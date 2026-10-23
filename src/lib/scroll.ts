import type Lenis from "lenis";

let lenis: Lenis | null = null;

export const setLenis = (instance: Lenis | null) => {
  lenis = instance;
};

// Trava o scroll da página (drawer mobile, modais). Funciona com e sem Lenis.
export const lockScroll = () => {
  lenis?.stop();
  document.documentElement.style.overflow = "hidden";
};

export const unlockScroll = () => {
  lenis?.start();
  document.documentElement.style.removeProperty("overflow");
};

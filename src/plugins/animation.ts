import { LOADING_ANIMATION_DOM } from "@/constants/index";

const ANIMATION_WAITING = 1000;

export const fadeOutLoading = () =>
  new Promise<void>((resolve) => {
    setTimeout(() => {
      const dom = document.getElementById(LOADING_ANIMATION_DOM);
      dom?.classList.add("opacity-0");
      dom?.classList.add("-z-50");
      resolve();
    }, ANIMATION_WAITING);
  });

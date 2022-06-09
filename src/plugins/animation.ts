import {
  LOADING_ANIMATION_DOM,
  LOADING_PROGRESS_BAR_ID,
} from "@/constants/index";

const ANIMATION_WAITING = 1000;

export default {
  fadeOutLoading: () =>
    new Promise<void>((resolve) => {
      setTimeout(() => {
        const dom = document.getElementById(LOADING_ANIMATION_DOM);
        dom?.classList.add("opacity-0");
        dom?.classList.add("-z-50");
        resolve();
      }, ANIMATION_WAITING);
    }),
  setProgress: (progress: number) => {
    const dom = document.getElementById(LOADING_PROGRESS_BAR_ID);
    if (dom) {
      dom.style.width = progress + "%";
    }
  },
};

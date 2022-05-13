const ANIMATION_CLASS = "loading-animation-loading";
const LOADING_DOM_CLASS = "loading-loading";
const ANIMATION_DERAY = 200;

const loadingStrings = document.getElementsByClassName(LOADING_DOM_CLASS);
[...loadingStrings].forEach((v, i) => {
  setTimeout(() => {
    v.classList.add(ANIMATION_CLASS);
  }, ANIMATION_DERAY * i);
});

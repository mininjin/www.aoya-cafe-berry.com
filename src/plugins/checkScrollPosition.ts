export const checkScrollPosition = (container?: HTMLElement): boolean => {
  const top = (container?.getBoundingClientRect().top || 0) + window.scrollY;
  return (
    container != undefined &&
    window.scrollY > top - window.innerHeight / 2 &&
    window.scrollY <= top + window.innerHeight
  );
};

export const isMobile = (breakpoint) => {
  let currentWidth = window.innerWidth;

  switch (breakpoint) {
    case 'sm':
      return currentWidth <= 420;
    case 'md':
      return currentWidth <= 720;
    case 'lg':
      return currentWidth <= 960;
    default:
      return false;
  }
}

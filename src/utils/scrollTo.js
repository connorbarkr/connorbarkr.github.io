import { isMobile } from './detectMobile.js';

let isSamsungBrowser = navigator.userAgent.match(/SamsungBrowser/i);

export const scrollTo = (ref, behavior, bottom) => {
  if (bottom) {
    window.scrollTo({top: document.body.scrollHeight, behavior: behavior ? behavior : 'auto'});
    return;
  }
  window.scrollTo({
    top: ref.current.offsetTop - (isMobile('lg') ? 0 : 45),
    behavior: behavior ? behavior : 'auto',
  });
  return;
};

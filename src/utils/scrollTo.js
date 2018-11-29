import { isMobile } from './detectMobile.js';

let isSamsungBrowser = navigator.userAgent.match(/SamsungBrowser/i);

export const scrollTo = (ref, behavior, bottom) => {
  let offset = isMobile(window, 'lg') ? 0 : 45;

  if (isSamsungBrowser) {behavior = 'auto';}
  if (bottom) {
    window.scrollTo({top: document.body.scrollHeight, behavior: behavior ? behavior : 'auto'});
    return;
  }
  window.scrollTo({
    top: ref.current.offsetTop - offset,
    behavior: behavior ? behavior : 'auto',
  });
  return;
};

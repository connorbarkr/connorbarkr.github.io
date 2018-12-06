import { isMobile } from './detectMobile.js';

let isSamsungBrowser = navigator.userAgent.match(/SamsungBrowser/i);

export const scrollTo = (ref, behavior, bottom) => {
  let offset = isMobile('lg') ? 0 : 45;

  if (bottom) {
    isSamsungBrowser ? window.scrollTo(0, document.body.scrollHeight) :
    window.scrollTo({top: document.body.scrollHeight, behavior: behavior ? behavior : 'auto'});
    return;
  }
  isSamsungBrowser ? window.scrollTo(0, ref.current.offsetTop - offset) :
  window.scrollTo({
    top: ref.current.offsetTop - offset,
    behavior: behavior ? behavior : 'auto',
  });
  return;
};

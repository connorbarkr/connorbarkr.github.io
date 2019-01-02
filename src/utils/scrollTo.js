import { isMobile } from './detectMobile.js';

let isNoScrollBrowser = !!(navigator.userAgent.match(/SamsungBrowser/i) ||
                          navigator.userAgent.match(/Trident/i) ||
                          navigator.userAgent.match(/rv:11/i) ||
                          navigator.userAgent.match(/MSIE/i) ||
                          navigator.userAgent.match(/Edge/i) ||
                          navigator.userAgent.match(/Safari/i));

export const scrollTo = (ref, behavior, bottom) => {
  let offset = isMobile('lg') ? 0 : 45;

  if (bottom) {
    isNoScrollBrowser ? window.scrollTo(0, document.body.scrollHeight) :
    window.scrollTo({top: document.body.scrollHeight, behavior: behavior ? behavior : 'auto'});
    return;
  }
  isNoScrollBrowser ? window.scrollTo(0, ref.current.offsetTop - offset) :
  window.scrollTo({
    top: ref.current.offsetTop - offset,
    behavior: behavior ? behavior : 'auto',
  });
  return;
};

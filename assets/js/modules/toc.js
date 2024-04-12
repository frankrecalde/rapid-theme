/**
 * Rapid toc.js
 */

import DynamicContentMenu from './jquery-dynamic-content-menu';

export default class Module {
  constructor() {
    (function ($) {
      $('#toc').dynamicContentMenu({
        selectors: 'h2',
        ignoreSelector: '.visually-hidden',
        theme: 'bootstrap',
        smoothScroll: 'slow',
        hideEffect: 'none',
        extendPage: false,
      });
    })(jQuery);
  }
}

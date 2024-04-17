/**
 * Rapid toc.js
 */

// eslint-disable-next-line no-unused-vars, import/no-extraneous-dependencies
import DynamicContentMenu from 'jquery-dynamic-content-menu';

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

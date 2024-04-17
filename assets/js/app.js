// Global app JS
// Extracted CSS will be render blocking in the <head>.

import('./modules/fontawesome').then(({ default: Module }) => {
  new Module();
});

import('./modules/main-menu').then(({ default: Module }) => {
  new Module();
});

import('./modules/bootstrap').then(({ default: Module }) => {
  new Module();
});

import('./modules/mobile-menu').then(({ default: Module }) => {
  new Module();
});

import('./modules/toc').then(({ default: Module }) => {
  new Module();
});

import('./modules/cookies-utility').then(({ default: Module }) => {
  new Module();
});

import('./modules/select2').then(({ default: Module }) => {
  new Module();
});

import('./modules/select2-searchInputPlaceholder').then(({ default: Module }) => {
  new Module();
});

import('./modules/country-selector').then(({ default: Module }) => {
  new Module();
});

/* import('./modules/jquery-ui').then(({ default: Module }) => {
  new Module();
}); */

/*

import('./modules/user-agent').then(({ default: Module }) => {
  new Module();
});

import('./modules/geolocation').then(({ default: Module }) => {
  new Module();
});

import('./modules/country-dialog-box').then(({ default: Module }) => {
  new Module();
});

import('./modules/country-location').then(({ default: Module }) => {
  new Module();
});

import('./modules/lightbox').then(({ default: Module }) => {
  new Module();
});

import('./modules/text').then(({ default: Module }) => {
  new Module();
});
 */

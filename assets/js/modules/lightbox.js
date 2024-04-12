/**
 * Rapid lightbox.js
 */

import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/dist/photoswipe.css';

export default class Module {
  constructor() {
    const lightbox = new PhotoSwipeLightbox({
      gallery: '#my-gallery',
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });

    lightbox.init();
  }
}

/**
 * Rapid fontawesome.js
 *
 * https://fontawesome.com/docs/apis/javascript/import-icons#package-names
 */

import { library, config, dom } from '@fortawesome/fontawesome-svg-core';

// Font Awesome Icons
import {
  faChevronDown,
  faChevronUp,
  faChevronRight,
  faChevronLeft,
  faCircleNotch,
  faBell,
  faSquareRss,
  faAngleDown,
  faAngleUp,
  faArrowUp,
} from '@fortawesome/free-solid-svg-icons';

import { faCircleInfo } from '@fortawesome/sharp-regular-svg-icons';

import { faArrowUpRight } from '@fortawesome/sharp-solid-svg-icons';

import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

export default class Module {
  constructor() {
    this.configure();

    // Attach to a drupal behaviour to update on content changes.
    Drupal.behaviors.fa = {
      attach: (context) => {
        if (context.querySelector('i')) {
          dom.i2svg({ node: context });
        }
      },
    };

    // Initialize this behaviour.
    Drupal.behaviors.fa.attach(document);
  }

  configure() {
    // Loaded in vendors.scss
    config.searchPseudoElements = true;
    config.familyDefault = 'sharp';

    // Add icons
    library.add(
      faChevronDown,
      faChevronUp,
      faChevronRight,
      faChevronLeft,
      faCircleNotch,
      faBell,
      faSquareRss,
      faFacebookF,
      faArrowUpRight,
      faAngleDown,
      faAngleUp,
      faCircleInfo,
      faArrowUp,
    );
  }
}

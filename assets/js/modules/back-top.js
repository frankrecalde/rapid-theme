/**
 * Rapid back-top.js
 *
 * Adds a floating "back to top" element.
 */

import '../../scss/molecules/back-top.scss';

export default class Module {
  constructor() {
    this.footer = document.querySelector('.site-footer');

    if (this.footer) {
      this.inject();

      // Get the button
      const backToTopButton = document.getElementById('btn-back-to-top');

      // When the user scrolls down 20px from the top of the document, show the button
      window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          backToTopButton.style.display = 'block';
        } else {
          backToTopButton.style.display = 'none';
        }
      };

      // When the user clicks on the button, scroll to the top of the document
      backToTopButton.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      });
    }
  }

  inject() {
    const html = `
      <button type="button" class="back-to-top btn btn-primary rounded-circle"
      id="btn-back-to-top" aria-hidden="true">
        <i class="fas fa-chevron-up"></i>
      </button>
    `;

    this.footer.insertAdjacentHTML('beforeend', html);

    if (Drupal.behaviors.fa) {
      Drupal.behaviors.fa.attach(this.footer.parentNode);
    }
  }
}

/**
 * Rapid back-top.js
 *
 * Adds a floating "back to top" element.
 */

((Drupal) => {
  Drupal.behaviors.backToTop = {
    attach: function (context) {
      this.footer = context.querySelector('.site-footer');
      if (this.footer) {
        // Get the button
        const backToTopButton = context.getElementById('btn-back-to-top');

        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function () {
          if (context.body.scrollTop > 20 || context.documentElement.scrollTop > 20) {
            backToTopButton.style.display = 'block';
          } else {
            backToTopButton.style.display = 'none';
          }
        };

        // When the user clicks on the button, scroll to the top of the document
        backToTopButton.addEventListener('click', () => {
          context.body.scrollTop = 0;
          context.documentElement.scrollTop = 0;
        });
      }
    },
  };
})(Drupal);

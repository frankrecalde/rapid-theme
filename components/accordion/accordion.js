/* eslint-disable max-nested-callbacks */
((Drupal) => {
  Drupal.behaviors.accordion = {
    attach: function (context) {
      once('accordion', '.accordion__toggle--all', context).forEach((accordion) => {
        accordion.addEventListener('click', () => {
          const accordionGroup = accordion.closest('.collapse-group');
          const accordionHeadings = Array.from(accordionGroup.querySelectorAll('.accordion-button'));
          const accordionContent = Array.from(accordionGroup.querySelectorAll('.collapse'));

          if (accordion.innerText === 'Open all') {
            accordion.innerText = 'Close all';
            accordionHeadings.forEach((item) => {
              item.classList.remove('collapsed');
            });
            accordionContent.forEach((item) => {
              item.classList.add('show');
            });
          } else {
            accordion.innerText = 'Open all';
            accordionHeadings.forEach((item) => {
              item.classList.add('collapsed');
            });
            accordionContent.forEach((item) => {
              item.classList.remove('show');
            });
          }
        });
      });
    },
  };
})(Drupal);

((Drupal) => {
  Drupal.behaviors.chip = {
    attach(context) {
      context.querySelectorAll('.chip--dismissable').forEach((chip) => {
        chip.addEventListener('click', () => {
          chip.classList.add('chip--dismissed');
        });
      });
    },
  };
})(Drupal);

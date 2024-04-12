/**
 * @file
 * Remove search filter.
 *
 */
(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.removeSearchFilter = {
    attach: function () {
      $('.remove-filter').click(function () {
        const datafield = $(this).attr('data-field');
        const buttonSelector = drupalSettings.remove_search_filter.button_selector;
        $('input[data-drupal-selector="' + datafield + '"]').removeAttr('checked');
        $('input[data-drupal-selector^="' + buttonSelector + '"]').trigger('click');
      });
    },
  };
})(jQuery, Drupal, drupalSettings);

/**
 * @file
 * Country selector JS.
 *
 */

export default class Module {
  constructor() {
    (($) => {
      $(function () {
        const isoCountries = [
          { id: '', text: '' },
          { id: 'AU', text: 'Australia' },
          { id: 'FJ', text: 'Fiji' },
          { id: 'AL', text: 'Albania' },
          { id: 'DZ', text: 'Algeria' },
          { id: 'AS', text: 'American Samoa' },
        ];

        function formatCountry(country) {
          if (!country.id) {
            return country.text;
          }

          const $country = $(
            '<span class="flag-icon flag-icon-' +
              country.id.toLowerCase() +
              '"></span>' +
              '<span class="flag-text">' +
              country.text +
              '</span>',
          );
          return $country;
        }

        $(document).ready(function () {
          $("[name='country']").select2({
            placeholder: 'Find your country',
            searchInputPlaceholder: 'Search country',
            width: '100%',
            allowClear: true,
            templateResult: formatCountry,
            templateSelection: formatCountry,
            data: isoCountries,
          });

          $("[name='country']").val(Drupal.behaviors.cookiesUtility.readCookie('country'));
          $("[name='country']").trigger('change');
        });

        $("[name='country']").on('select2:select', function (e) {
          const { data } = e.params;
          Drupal.behaviors.cookiesUtility.eraseCookie('country');
          Drupal.behaviors.cookiesUtility.createCookie('country', data.id, 24);
          window.location.reload(true);
        });
      });
    })(jQuery);
  }
}

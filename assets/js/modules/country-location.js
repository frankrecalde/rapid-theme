/**
 * @file
 * Country location.
 */

export default class Module {
  constructor() {
    ((Drupal) => {
      Drupal.behaviors.countryLocation = {
        /**
         * Get the country location from external service.
         *
         * @param {Function} done
         *   Done callback.
         *
         * @return {string}
         *   The country location.
         */
        async getCountryLocation() {
          let countryCode = 'FJ';
          const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });

          try {
            const data = await fetch('https://www.cloudflare.com/cdn-cgi/trace', { mode: 'cors' }).then((res) =>
              res.text(),
            );

            const arr = data
              .trim()
              .split('\n')
              .map((e) => e.split('='));
            const rawData = Object.fromEntries(arr);
            if (rawData.loc) {
              countryCode = rawData.loc;
            }
          } catch (e) {
            // eslint-disable-next-line no-console
            console.error('Error occurred: ', e.message);
          }

          return regionNames.of(countryCode);
        },
      };
    })(Drupal);
  }
}

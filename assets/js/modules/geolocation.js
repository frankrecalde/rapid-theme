/**
 * @file
 * Geolocation JS.
 *
 */

export default class Module {
  constructor() {
    (($, Drupal, localStorage) => {
      Drupal.behaviors.geolocation = {
        /**
         * Default settings.
         */
        settings: {
          isIe: /MSIE|Trident/.test(window.navigator.userAgent),
          cacheSeconds: 24 * 60 * 60,
          geolocationCommon: {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
          },
          geolocationIe: {
            enableHighAccuracy: false,
            maximumAge: 5000,
          },
          geoErrorMessages: {
            1: 'User denied the request for Geolocation.',
            2: 'Location information is unavailable.',
            3: 'The request to get user location timed out.',
            default: 'An unknown error occurred.',
          },
        },

        /**
         * Get the current location from local storage.
         *
         * @param {Function} done
         *   Done callback.
         *
         * @return {void}
         *   Nothing.
         */
        getCurrentLocation(done) {
          if (!window.rapidUtil.userAgentSupportsLocalStorage()) {
            done(false);
            return;
          }

          let geoLocationSettings = this.settings.geolocationCommon;
          if (this.settings.isIe) {
            geoLocationSettings = $.extend(true, {}, geoLocationSettings, this.settings.geolocationIe);
          }

          const latitude = localStorage.getItem('latitude');
          const longitude = localStorage.getItem('longitude');
          const expiry = parseInt(localStorage.getItem('geolocation.expiry_time'), 10);
          if (!Number.isNaN(expiry) && expiry >= Date.now() && latitude && longitude) {
            done({
              latitude,
              longitude,
            });
            return;
          }

          navigator.geolocation.getCurrentPosition(
            (position) => {
              localStorage.setItem('geolocation.expiry_time', Date.now() + this.settings.cacheSeconds * 1000);
              localStorage.setItem('latitude', position.coords.latitude);
              localStorage.setItem('longitude', position.coords.longitude);
              done({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              });
            },
            (error) => {
              if (this.settings.geoErrorMessages.hasOwnProperty(error.code)) {
                // eslint-disable-next-line no-console
                console.error(this.settings.geoErrorMessages[error.code]);
              } else {
                // eslint-disable-next-line no-console
                console.error(this.settings.geoErrorMessages.default);
              }
            },
            geoLocationSettings,
          );
        },
      };
    })(jQuery, Drupal, localStorage);
  }
}

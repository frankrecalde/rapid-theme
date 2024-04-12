/**
 * @file
 * Country dialog box.
 */

import { Modal } from 'bootstrap';

export default class Module {
  constructor() {
    /* Drupal.behaviors.geolocation.getCurrentLocation((geolocation) => {
      console.log(geolocation);
    }); */
    /* Drupal.behaviors.countryLocation.getCountryLocation().then((country) => {
      console.log(country);
    }); */
    const options = {
      backdrop: 'static',
      keyboard: true,
      focus: true,
    };

    const exampleModal = document.getElementById('exampleModal');
    const myModal = new Modal(exampleModal, options);

    async function getCountryLocation() {
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

      return { code: countryCode, name: regionNames.of(countryCode) };
    }

    getCountryLocation().then((country) => {
      /* country !== 'Australia' &&  */
      if (Drupal.behaviors.cookiesUtility.readCookie('country-dialog-box') !== 'displayed') {
        exampleModal.addEventListener('show.bs.modal', function () {
          const modalTitle = exampleModal.querySelector('.modal-title');
          const modalContent = exampleModal.querySelector('.modal-body p');

          modalTitle.textContent += country.name;
          modalContent.textContent = 'New content ';
        });
        myModal.show();
        Drupal.behaviors.cookiesUtility.createCookie('country-dialog-box', 'displayed', 24);
        Drupal.behaviors.cookiesUtility.createCookie('country', country.code, 24);

        const saveBtn = document.querySelector('.modal-footer .btn-primary');

        saveBtn.addEventListener('click', function () {
          Drupal.behaviors.cookiesUtility.eraseCookie('country');
          Drupal.behaviors.cookiesUtility.createCookie('country', country.code, 24);
          window.location.reload(true);
        });
      }
    });
  }
}

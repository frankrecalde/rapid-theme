/**
 * @file
 * Cookies utility JS.
 *
 */

export default class Module {
  constructor() {
    ((Drupal) => {
      Drupal.behaviors.cookiesUtility = {
        createCookie(name, value, hours) {
          let expires;
          const date = new Date();

          if (hours) {
            date.setTime(date.getTime() + hours * 60 * 60 * 1000);
            expires = '; expires=' + date.toGMTString();
          } else {
            expires = '';
          }
          document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value) + expires + '; path=/';
        },

        cookieExists(name) {
          return document.cookie.split(';').some((item) => item.trim().startsWith(`${name}=`));
        },

        readCookie(name) {
          const nameEQ = encodeURIComponent(name) + '=';
          const ca = document.cookie.split(';');

          for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
          }
          return null;
        },

        eraseCookie(name) {
          this.createCookie(name, '', -1);
        },
      };
    })(Drupal);
  }
}

/**
 * @file
 * User Agent Utility JS.
 */

export default class Module {
  constructor() {
    ((window, localStorage) => {
      window.rapidUtil = window.rapidUtil || {};

      /**
       * Check whether the user agent supports local storage.
       *
       * @return {boolean}
       *   Whether local storage is supported.
       */
      window.rapidUtil.userAgentSupportsLocalStorage = () => {
        if (typeof window.rapidUtil.isLocalStorageSupported === 'boolean') {
          return window.rapidUtil.isLocalStorageSupported;
        }

        const localStorageItem = 'rapid_util.local_storage_check';
        try {
          localStorage.setItem(localStorageItem, localStorageItem);
          localStorage.removeItem(localStorageItem);
        } catch (e) {
          window.rapidUtil.isLocalStorageSupported = false;
          return false;
        }

        window.rapidUtil.isLocalStorageSupported = true;
        return true;
      };
    })(window, localStorage);
  }
}

export default class Module {
  constructor() {
    (($) => {
      const Defaults = $.fn.select2.amd.require('select2/defaults');
      const SearchDropdown = $.fn.select2.amd.require('select2/dropdown/search');

      const _renderSearchDropdown = SearchDropdown.prototype.render;

      $.extend(Defaults.defaults, {
        searchInputPlaceholder: '',
      });

      SearchDropdown.prototype.render = function () {
        // invoke parent method
        // eslint-disable-next-line prefer-rest-params
        const $rendered = _renderSearchDropdown.apply(this, Array.prototype.slice.apply(arguments));

        this.$search.attr('placeholder', this.options.get('searchInputPlaceholder'));

        return $rendered;
      };
    })(window.jQuery);
  }
}

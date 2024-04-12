/**
 * Rapid text.js
 */

import { gsap, ScrollTrigger, TextPlugin } from 'gsap/all';

export default class Module {
  constructor() {
    (function ($) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.registerPlugin(TextPlugin);

      const yourElement = $('.statsBanner__intro h2');

      gsap.to(yourElement, {
        duration: 2,
        text: 'This is the new text',
        ease: 'none',
      });

      // get stats in array to process one by one
      const stats = $('.statsBannerCard__statistic').toArray();

      // recursive function
      function countOne(stats) {
        if (stats.length < 1) {
          // when all stats done exit
          return;
        }
        const stat = stats.shift(); // remove first

        // make the card visible
        $(stat).parent().css({
          visibility: 'visible',
        });

        var count = $(stat);
        var zero = {
          val: 0,
        };
        var num = count.data('number');
        var split = (num + '').split('.'); // to cover for instances of decimals
        var decimals = split.length > 1 ? split[1].length : 0;

        // if it's not a number then skip counting
        if (typeof num === 'number') {
          gsap.to(zero, {
            val: num,
            duration: 2,
            scrollTrigger: stat,
            onUpdate: function () {
              let numText = zero.val.toFixed(decimals);
              numText = numText.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
              count.text(numText);
            },
            onComplete: function () {
              countOne(stats);
            },
          });
        } else {
          count.text(num);
          countOne(stats);
        }
      }

      // initiate
      countOne(stats);
    })(jQuery);
  }
}

/*
 * jquery.spin
 * https://github.com/tdoherty/jQuery.SpinJS
 *
 * a jquery plugin for spin.js - http://fgnass.github.com/spin.js/
 * - inserts a loading background with configurable color and opacity
 *
 * Copyright (c) 2013 tdoherty
 * Licensed under the MIT license.
 */

(function($) {

  $.fn.spin = function (opts) {
    //spin.js opts
    var defaults = {
      lines: 12, // The number of lines to draw
      length: 7, // The length of each line
      width: 5, // The line thickness
      radius: 10, // The radius of the inner circle
      color: '#fff', // #rbg or #rrggbb
      speed: 1, // Rounds per second
      trail: 100, // Afterglow percentage
      shadow: true, // Whether to render a shadow

      //plugin-specific
      bgColor: 'Gray', //loading background color
      opacity: 4 //loading background opacity
    };

    this.each(function () {
      var $this = $(this);
      var $data = $this.data();

      if ($data.spinner) {
        $data.spinner.stop();
        delete $data.spinner;
        $this.find('.loadingBG').remove();
      }

      if (opts === false) { return; }

      opts = opts || {};
      $.extend(opts, defaults);

      var $bgEl = $('<div>');
      $bgEl.addClass('loadingBG');
      $bgEl.css({
        'display': 'none',
        'filter': 'alpha(opacity=' + opts.opacity * 10 + ')',
        'opacity': opts.opacity / 10,
        '-ms-filter': 'progid:DXImageTransform.Microsoft.Alpha(opacity=' + opts.opacity * 10 + ')', /*IE8*/
        'position': 'absolute',
        'z-index': 9999,
        'top': $this.css('position') === 'absolute' ? 0 : $this.position().top,
        'left': $this.css('position') === 'absolute' ? 0 : $this.position().left,
        'background-color': opts.bgColor.toString(),
        'width': $this.outerWidth(),
        'height': $this.outerHeight() === 0 ? '100%' : $this.outerHeight()
      });

//      delete opts.bgColor;
//      delete opts.opacity;
      $data.spinner = new Spinner(opts).spin(this);

      $bgEl.prependTo($this).show();
    });
    return this;
  };

}(jQuery));

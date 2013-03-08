# jQuery Spin

A jQuery plugin for  Felix Gnass' excellent spin.js: http://fgnass.github.com/spin.js/

The plugin adds a background div with configurable color and transparency, and supports AMD.

View a demo [here](http://tdoherty.github.com/jQuery.SpinJS)

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/tdoherty/jQuery.SpinJS/master/dist/jquery.spin.min.js
[max]: https://raw.github.com/tdoherty/jQuery.SpinJS/master/dist/jquery.spin.js

In your web page:

```html
<script src="libs/spin/spin.js"></script>
<script src="libs/jquery/jquery.js"></script>
<script src="dist/jquery.spin.min.js"></script>
<script>
  jQuery(function($) {
    $('.className').spin(); // show the spinner
    $('.className').spin(false); // stop the spinner
  });
</script>
```
- or with optional AMD support, add an alias 'spin' to spin.js:

```html
<script src="libs/requirejs/require.js"></script>
<script>
  requirejs.config({
    paths: {
      'jquery': 'libs/jquery/jquery',
      'spin': 'libs/spin/spin'
    }
  });
  require(['jquery', 'dist/jquery.spin.min'], function ($) {
    $('.className').spin(); // show the spinner
    $('.className').spin(false); // stop the spinner
  });
</script>
```

## Documentation
_(Coming soon)_

## Examples
_(Coming soon)_

## Release History
_(Nothing yet)_

//(function($) {

//testing AMD support
require.config({
  paths:{
    'jquery':'../libs/jquery/jquery',
    'spin':'../libs/spin/spin',
    'qunit': '../libs/qunit/qunit'
  }
});

require(
  [
    'jquery',
    '../src/jquery.spin'
  ], function ($) {


  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */
//  QUnit.start();

  module('jQuery#spin', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is chainable', function() {
    expect(1);
    // Not a bad test to run on collection methods.
    strictEqual(this.elems.spin(), this.elems, 'should be chainable');
  });

  test('has background', function() {
    expect(1);
    this.elems.spin();
    ok(this.elems.first().find('.loadingBG').length > 0, 'should be awesome');
  });

  module('jQuery.spin');

  //TODO: more tests!
//  test('is awesome', function() {
//    expect(2);
//    strictEqual($.awesome(), 'awesome.', 'should be awesome');
//    strictEqual($.awesome({punctuation: '!'}), 'awesome!', 'should be thoroughly awesome');
//  });
//
//  module(':awesome selector', {
//    // This will run before each test in this module.
//    setup: function() {
//      this.elems = $('#qunit-fixture').children();
//    }
//  });
//
//  test('is awesome', function() {
//    expect(1);
//    // Use deepEqual & .get() when comparing jQuery objects.
//    deepEqual(this.elems.filter(':awesome').get(), this.elems.last().get(), 'knows awesome when it sees it');
//  });

  }
);

//}(jQuery));

'use strict';

var run = require('../support/run');
var build = require('./build');
var path = require('path');
var runnel = require('runnel');

function test(file, cb) {
  var p = require.resolve('./' + file);
  var title = 'all remote ' + file.replace(/-/g, ' ');
  console.log('  - ', title);
  run(
      __dirname
      , { build  :  build.bind(null, p)
      , html   :  path.basename(file) + '.html'
      , bundle :  path.basename(file) + '.bundle.js'
      , title  :  title
      }
    , cb
  );
}

var go = module.exports = function (cb) {
  console.log('running ', __filename);

  runnel(
      test.bind(null, 'test-jsonp-callbacks')
    , cb
  );
};

if (!module.parent) go(function () {
  console.log('done');
});

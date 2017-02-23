require('babel-core/register');
require('babel-regenerator-runtime')
require('babel-polyfill');

module.exports = require('./dist/package').default;

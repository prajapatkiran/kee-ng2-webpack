/**
 * @author: KP
 */
const path = require('path');

const ENV = process.env.NODE_ENV;
const pkg = require('../package.json');
const ROOT = path.resolve(__dirname, '..');

exports.dir = function(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [ROOT].concat(args));
};

exports.ENV = JSON.stringify(ENV);
exports.IS_PRODUCTION = ENV === 'production';
exports.IS_PACKAGE = ENV === 'package';
exports.IS_DEV = ENV === 'dev' || ENV === 'development';
exports.APP_VERSION = JSON.stringify(pkg.version);

// var path = require('path');

// const EVENT = process.env.npm_lifecycle_event || '';

// // Helper functions
// var ROOT = path.resolve(__dirname, '..');

// function hasProcessFlag(flag) {
//     return process.argv.join('').indexOf(flag) > -1;
// }

// function hasNpmFlag(flag) {
//     return EVENT.includes(flag);
// }

// function isWebpackDevServer() {
//     return process.argv[1] && !!(/webpack-dev-server/.exec(process.argv[1]));
// }

// var root = path.join.bind(path, ROOT);

// exports.hasProcessFlag = hasProcessFlag;
// exports.hasNpmFlag = hasNpmFlag;
// exports.isWebpackDevServer = isWebpackDevServer;
// exports.root = root;
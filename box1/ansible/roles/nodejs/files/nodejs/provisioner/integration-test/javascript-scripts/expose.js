// expose.js
module.exports = { __dirname };
// Workaround to mjs files not having access to __dirname
// https://github.com/nodejs/node-eps/blob/master/002-es-modules.md#4512-getting-cjs-variables-workaround

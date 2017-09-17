'use strict';
const Addon = require('bindings')('addon.node');

module.exports.getMethods = function () {

    return Promise.resolve({
        rec: Addon.FiboRec,
        loop: Addon.FiboLoop
    });
};

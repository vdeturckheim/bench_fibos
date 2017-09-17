'use strict';
const Rec = require('./built/fibo_rec');
const Loop = require('./built/fibo_loop');

module.exports.getMethods = function () {

    return Promise.resolve({
        rec: Rec._fib_rec,
        loop: Loop._fib_loop
    });
};

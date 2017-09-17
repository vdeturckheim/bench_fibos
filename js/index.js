'use strict';
const Rec = require('./lib/fibo_rec');
const Loop = require('./lib/fibo_loop');

module.exports.getMethods = function () {

    return Promise.resolve({
        rec: Rec.fib_rec,
        loop: Loop.fib_loop
    });
};
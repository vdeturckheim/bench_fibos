'use strict';
const Rec = require('./fibo_rec');
const Loop = require('./fibo_loop');

module.exports.getMethods = function () {

    return new Promise((resolve) => {

        setTimeout(() => {

            return resolve({
                rec: Rec._fib_rec,
                loop: Loop._fib_loop
            });
        });
    });
};


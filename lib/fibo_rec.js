'use strict';
const fib = function (n) {

    if (n <= 1)
        return n;
    return fib(n-1) + fib(n-2);
};

module.exports.fib_rec = fib;

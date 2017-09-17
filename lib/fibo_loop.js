'use strict';
module.exports.fib_loop = function (n) {

    let a = 0;
    let b = 1;
    let c;
    if( n === 0)
        return a;
    for (let i = 2; i <= n; i++)
    {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
};
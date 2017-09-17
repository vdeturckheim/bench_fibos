'use strict';
const cwd = process.cwd();
process.chdir(__dirname);

const Rec = require('./fibo_rec');
const Loop = require('./fibo_loop');

module.exports.getMethods = function () {

    return new Promise((resolve) => {

        Rec.addOnPostRun(() => {

            Loop.addOnPostRun(() => {

                process.chdir(cwd);

                return resolve({
                    rec: Rec._fib_rec,
                    loop: Loop._fib_loop
                });
            });
        });
    });
};


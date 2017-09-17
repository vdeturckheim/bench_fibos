'use strict';
const MAX_N = 46; // after 46, the max limit of int ie reached


const js = require('./wasm');
const data = require('./data.json');

js.getMethods()
    .then((methods) => {

        console.time('q');
        console.log(methods.loop(46), data[46]);
        console.timeEnd('q');
    });

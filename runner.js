'use strict';
const Assert = require('assert');

const LOOP = parseInt(process.argv.pop());
const N = parseInt(process.argv.pop());
const target = process.argv.pop();
const method = process.argv.pop();

Assert(typeof N === 'number');
Assert(typeof target === 'string');
Assert(method === 'rec' || method === 'loop');

const Value = require('./data.json')[N];


const mod = require(target);

mod.getMethods()
    .then((x) => x[method])
    .then((method) => {


        const times = [];
        for (let i = 0; i < LOOP; ++i) {
            const t0 = process.hrtime();
            const result = method(N);
            const t1 = process.hrtime(t0);

            Assert(result === Value);
            times.push(t1[0] * 1000 + t1[1]/1e6 );
        }
        return times.reduce((a, b) => a + b, 0)/times.length;
    })
    .then(console.log)
    .catch((e) => console.log(-1));

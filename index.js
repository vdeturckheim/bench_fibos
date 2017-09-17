'use strict';
const MAX_N = 46; // after 46, the max limit of int ie reached
const NB_RUN = 10000;

const METHOD = 'loop';

const CP = require('child_process');


const targets = ['./c_to_js', './js', './nan_addon', './wasm'];

const res = {};
for (let target of targets){

    res[target] = new Array(MAX_N);
    for (let i = 1; i < MAX_N; ++i) {

        process.stdout.write('node ./runner ' + METHOD + ' ' + target + ' ' + i + ' ' + NB_RUN);
        process.stdout.write(' ... ');
        const result = CP.execSync('node ./runner ' + METHOD + ' ' + target + ' ' + i + ' ' + NB_RUN).toString();
        process.stdout.write(result);
        res[target][i] = parseFloat(result);
    }
}
const Fs = require('fs');

Fs.writeFileSync('./results.json', JSON.stringify(res, null, 2))


#!/usr/bin/env bash
source ~/.profile
mkdir -p built

emcc src/fibo_loop.c -o built/fibo_loop.js
emcc src/fibo_rec.c -o built/fibo_rec.js


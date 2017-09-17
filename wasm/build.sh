#!/usr/bin/env bash
source ~/.profile

emcc src/fibo_loop.c -o fibo_loop.js -s WASM=1
emcc src/fibo_rec.c -o fibo_rec.js -s WASM=1


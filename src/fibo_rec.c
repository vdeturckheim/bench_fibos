//
// Created by Vladimir de Turckheim on 17/09/2017.
//

#include "fibo_rec.h"
#include <emscripten.h>
// from http://www.geeksforgeeks.org/program-for-nth-fibonacci-number/
EMSCRIPTEN_KEEPALIVE
int fib_rec(int n)
{
    if (n <= 1)
        return n;
    return fib_rec(n-1) + fib_rec(n-2);
}


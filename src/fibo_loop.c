//
// Created by Vladimir de Turckheim on 17/09/2017.
//

#include "fibo_loop.h"
#include <emscripten.h>
// from http://www.geeksforgeeks.org/program-for-nth-fibonacci-number/
EMSCRIPTEN_KEEPALIVE
int fib_loop(int n)
{
    int a = 0, b = 1, c, i;
    if( n == 0)
        return a;
    for (i = 2; i <= n; i++)
    {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}

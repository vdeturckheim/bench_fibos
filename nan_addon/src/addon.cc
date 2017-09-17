#include <nan.h>

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

int fib_rec(int n)
{
    if (n <= 1)
        return n;
    return fib_rec(n-1) + fib_rec(n-2);
}

void FiboRec(const Nan::FunctionCallbackInfo<v8::Value>& info) {

  if (info.Length() < 1) {
    Nan::ThrowTypeError("Wrong number of arguments");
    return;
  }

  if (!info[0]->IsNumber()) {
    Nan::ThrowTypeError("Wrong arguments");
    return;
  }

  double arg0 = info[0]->NumberValue();
  v8::Local<v8::Number> num = Nan::New(fib_rec(arg0));

  info.GetReturnValue().Set(num);
}

void FiboLoop(const Nan::FunctionCallbackInfo<v8::Value>& info) {

  if (info.Length() < 1) {
    Nan::ThrowTypeError("Wrong number of arguments");
    return;
  }

  if (!info[0]->IsNumber()) {
    Nan::ThrowTypeError("Wrong arguments");
    return;
  }

  double arg0 = info[0]->NumberValue();
  v8::Local<v8::Number> num = Nan::New(fib_loop(arg0));

  info.GetReturnValue().Set(num);
}

void Init(v8::Local<v8::Object> exports) {
  exports->Set(Nan::New("FiboRec").ToLocalChecked(),
               Nan::New<v8::FunctionTemplate>(FiboRec)->GetFunction());
    exports->Set(Nan::New("FiboLoop").ToLocalChecked(),
                 Nan::New<v8::FunctionTemplate>(FiboLoop)->GetFunction());
}

NODE_MODULE(addon, Init)
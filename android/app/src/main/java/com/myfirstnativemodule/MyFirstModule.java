package com.myfirstnativemodule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;


// 1 - criar modulo extendendo ReactContextBaseJavaModule
public class MyFirstModule extends ReactContextBaseJavaModule {
    MyFirstModule(ReactApplicationContext context) {
        super(context);
    }

    // 2 - implementar getName com nome do modulo(esse nome será usado no JS)
    @Override
    public String getName() {
        return "MyFirstModule";
    }

    // 3 - criar metodo que sera utilizado no JS.
    @ReactMethod(isBlockingSynchronousMethod = true)
    public String getText() {
        return "Android: Texto Nativo Uhuu! :-)";
    }
}

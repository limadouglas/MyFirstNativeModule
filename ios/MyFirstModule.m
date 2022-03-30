#import <React/RCTBridgeModule.h>

// 3 - exporta o modulo e metodos criados em MyFirstModule.swift
// Criando ponte entre o código Objective-C e Swift para o JS.
@interface RCT_EXTERN_MODULE(MyFirstModule, NSObject)
RCT_EXTERN_METHOD(getText: (RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
RCT_EXTERN_METHOD(getNumberPhotosLiberated: (RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
@end

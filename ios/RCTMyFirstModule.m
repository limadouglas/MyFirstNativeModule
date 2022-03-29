// RCTMyFirstModule.m
#import <Foundation/Foundation.h>
#import "RCTMyFirstModule.h"
#import <React/RCTLog.h>
@implementation RCTMyFirstModule

// To export a module named RCTMyFirstModule
RCT_EXPORT_MODULE();

RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(getText)
{
  NSString *text = @"IOS: Texto Nativo Uhuu! :-)";
  return text;
}

@end

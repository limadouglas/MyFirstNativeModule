
import Foundation
import UIKit
import AVFoundation
import PhotosUI

// 1 - criar modulo nativo 
// "@objc" significa que o codigo será utilizado no objective-c
@objc (MyFirstModule)
class MyFirstModule : NSObject {

  // obs: requiresMainQueueSetuppara gerenciar nossa fila no thread principal.
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
  // 2 - Criar metodo que será utilizado no JS.
  @objc
  func getText(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) -> Void {
    resolve("IOS: Texto Nativo Uhuu! :-)");
  }

  @objc
  func getNumberPhotosLiberated(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) -> Void {
    let photoCount = PHAsset.fetchAssets(with: nil).count
    
    resolve(photoCount);
  }
}

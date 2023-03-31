import { Injectable } from '@angular/core';
import { Car } from '../_model/car.model';
import { FileHandle } from '../_model/file-handle.model';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ImageProcessingService {

  constructor(private sanitizer: DomSanitizer) { }

  public createImages(car: Car) {
    const carImages: any[]= car.carImages;

    const carImagesToFileHandle: FileHandle[] = [];

    for(var i = 0 ;i< carImages.length;i++) {
      const imageFileData = carImages[i];
      
      const imageBlob = this.dataURLToBlob(imageFileData.picType, imageFileData.type);
      const imageFile = new File([imageBlob],imageFileData.name, {type: imageFileData.type});

      const finalFileHandle: FileHandle = {
        file: imageFile,
        url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile))
      };
      carImagesToFileHandle.push(finalFileHandle);
    }
    car.carImages = carImagesToFileHandle;
    return car;
  }

  public dataURLToBlob(picBytes:any, imageType:any) {
    const byteString = window.atob(picBytes);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);

    for(var i = 0;i< byteString.length;i++) {
      int8Array[i] = byteString.charCodeAt(i);

    }
    const  blob = new Blob([int8Array], {type: imageType});
    return blob;
  }
}

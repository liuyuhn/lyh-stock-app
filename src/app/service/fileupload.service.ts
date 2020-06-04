import { Injectable } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Injectable({
  providedIn: 'root'
})
export class FileuploadService {
  public uploader: FileUploader = new FileUploader({
    // url: this.rootUrl + "/images/upload", //上传地址
    method: "POST",  //上传方式
    itemAlias: "imageFile",  //别名（后台接受参数名）
    autoUpload: false  //是否自动上传（如果为true，则在input选择完后自动上传）
  });
  constructor() { }
}

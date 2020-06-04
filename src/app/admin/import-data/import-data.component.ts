import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
// import { UploadService } from '../../../service/fileupload.service';

@Component({
  selector: 'app-import-data',
  templateUrl: './import-data.component.html',
  styleUrls: ['./import-data.component.css']
})
export class ImportDataComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({
    // url: this.config.rootUrl + "/images/upload", //上传地址
    method: "POST",  //上传方式
    itemAlias: "loadFile",  //别名（后台接受参数名）
    autoUpload: false  //是否自动上传（如果为true，则在input选择完后自动上传）
  });
  uploadFile() {
    //附加额外参数
      this.uploader.setOptions({
        additionalParameter: {
          'name': 'file',
          'version': '0.1',
          'repository': 'first'
        }
      });
      // 开始上传
      this.uploader.queue[0].upload();
      //判断是否上传成功
      this.uploader.queue[0].onSuccess = function (response, status, headers) {
        // 上传文件成功
        if (status === 200) {
          console.log('上传成功');
          console.log('upload',this.uploader)
        } else {
          console.log('上传失败');
        }
      }
    }
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { AdminService } from 'src/app/service/admin.service'
// import { UploadService } from '../../../service/fileupload.service';
@Component({
  selector: 'app-import-data',
  templateUrl: './import-data.component.html',
  styleUrls: ['./import-data.component.css']
})
export class ImportDataComponent implements OnInit {
  selectedFile = null;
  public uploader: FileUploader = new FileUploader({
    url: "api/excel/import", //上传地址
    method: "POST",  //上传方式
    itemAlias: "file",  //别名（后台接受参数名）
    autoUpload: false  //是否自动上传（如果为true，则在input选择完后自动上传）
  });

  selectedFileOnChanged(event: any){
    console.log('111111',event.target.value);
    // console.log('2222222',this.uploader.queue[0].file.name);
    this.selectedFile = event.target.value
    this.AdminService.postImportData(event.target.value).subscribe((data) => {
        console.log(data)
      })
  }
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
    
    constructor(public AdminService:AdminService) { 
    }
  ngOnInit(): void {
  }
}
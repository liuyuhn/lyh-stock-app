import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; //get,post数据交互

@Injectable({
    providedIn: 'root'
})

export class UploadService {
    constructor(public http: HttpClient, ) { }

    postUpload(user: any) {//后台传来的data,数据类型（usertype）判断role是否为admin,前端根据role判定跳转页面
        // const httpOtions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
        const httpOtions = { headers: new HttpHeaders({ 'content-Type': 'application/json', 'Access-Control-Allow-Credentials': 'true' }) };
        // return this.http.post(`http://localhost:4200`, JSON.stringify(user), httpOtions);
        return this.http.post(`/api/excel/import`, JSON.stringify(user), httpOtions);
    }
}
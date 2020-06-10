import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; //get,post数据交互
import { environment } from '../../environments/environment' //root url

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor( public http: HttpClient) {}
  // http: any;
  postImportData(user: any) {//后台传来的data,显示在页面上file的summary
    // const httpOtions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    const httpOtions = { headers: new HttpHeaders({ 'content-Type': 'application/json', 'Access-Control-Allow-Credentials': 'true' }) };
    return this.http.post(`http://localhost:4200/admin-home`, JSON.stringify(user), httpOtions);
  }
  getComList() {//后台获取companies的data
    // const httpOtions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) }; //固定写法
    var api = 'http://localhost:4200/admin-home`'
    return this.http.get(api)
  }
  postEditCom(user: any) {//edit过的company信息传给后台，返回msg
    // const httpOtions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    const httpOtions = { headers: new HttpHeaders({ 'content-Type': 'application/json', 'Access-Control-Allow-Credentials': 'true' }) };
    return this.http.post(`http://localhost:4200/admin-home`, JSON.stringify(user), httpOtions);
  }
  postUpdateCom(user: any) {//添加的company信息传给后台，返回msg
    // const httpOtions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    const httpOtions = { headers: new HttpHeaders({ 'content-Type': 'application/json', 'Access-Control-Allow-Credentials': 'true' }) };
    return this.http.post(`http://localhost:4200/admin-home`, JSON.stringify(user), httpOtions);
  }
  getExchangeList() {//后台获取stock exchange的data
    // const httpOtions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) }; //固定写法
    var api = 'http://localhost:4200/admin-home`'
    return this.http.get(api)
  }
  postUpExchange(user: any) {//更新的stock exchange信息传给后台，返回msg
    // const httpOtions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    const httpOtions = { headers: new HttpHeaders({ 'content-Type': 'application/json', 'Access-Control-Allow-Credentials': 'true' }) };
    return this.http.post(`http://localhost:4200/admin-home`, JSON.stringify(user), httpOtions);
  }
  postAddExchange(user: any) {//添加的stock exchange信息传给后台，返回msg
    // const httpOtions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    const httpOtions = { headers: new HttpHeaders({ 'content-Type': 'application/json', 'Access-Control-Allow-Credentials': 'true' }) };
    return this.http.post(`http://localhost:4200/admin-home`, JSON.stringify(user), httpOtions);
  }
  getIpoDetail() {//后台获取IPOs的data
    // const httpOtions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) }; //固定写法
    var api = 'http://localhost:4200/admin-home`'
    return this.http.get(api)
  }
  postUpIpo(user: any) {//更新的ipo信息传给后台，返回msg
    // const httpOtions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    const httpOtions = { headers: new HttpHeaders({ 'content-Type': 'application/json', 'Access-Control-Allow-Credentials': 'true' }) };
    return this.http.post(`http://localhost:4200/admin-home`, JSON.stringify(user), httpOtions);
  }
}

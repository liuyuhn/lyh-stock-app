import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; //get,post数据交互
import { environment } from '../../environments/environment' //root url

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor( public http: HttpClient,) { }
  // http: any;
  postLogIn(user: any) {//后台传来的data,数据类型（usertype）判断role是否为admin,前端根据role判定跳转页面
    // const httpOtions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    const httpOtions = { headers: new HttpHeaders({ 'content-Type': 'application/json', 'Access-Control-Allow-Credentials': 'true' }) };
    return this.http.post(`http://localhost:4200`, JSON.stringify(user), httpOtions);
  }
  postSignUp(user: any) {//需传回sign成功的msg
    // const httpOtions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    const httpOtions = { headers: new HttpHeaders({ 'content-Type': 'application/json', 'Access-Control-Allow-Credentials': 'true' }) };
    return this.http.post(`http://localhost:4200/sign-up`, JSON.stringify(user), httpOtions);
  }
  postCompareCom(user: any) {//传回需要的data，用于生成chart（根据是否比较可能会有两组data传回）
    // const httpOtions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    const httpOtions = { headers: new HttpHeaders({ 'content-Type': 'application/json', 'Access-Control-Allow-Credentials': 'true' }) };
    return this.http.post(`http://localhost:4200/user-home`, JSON.stringify(user), httpOtions);
  }
  postChangePass(user: any) {//传回是否成功的msg
    // const httpOtions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    const httpOtions = { headers: new HttpHeaders({ 'content-Type': 'application/json', 'Access-Control-Allow-Credentials': 'true' }) };
    return this.http.post(`http://localhost:4200/user-home`, JSON.stringify(user), httpOtions);
  }
  getIpoList() {//从后台获取ipos的data
    const httpOtions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) }; //固定写法
    var api = 'http://localhost:4200/user-home`'
    return this.http.get(api)
  }
  getLogout() {//退出得到msg提示
    const httpOtions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) }; //固定写法
    var api = 'http://localhost:4200/user-home`'
    return this.http.get(api)
  }
  
}

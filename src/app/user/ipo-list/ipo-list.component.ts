import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service'
import { HttpClient, HttpHeaders } from '@angular/common/http' 

interface ipolistinfo{
  company_name:string;
  stock_exchange:string;
  price_per_share:number;
  total_num:number;
  open_date:string;
  remark:string
}
// const IPOLISTS: ipolistinfo[] =[
//   {
//     company_name:'YPO',
//     stock_exchange:'BSE',
//     price_per_share:80,
//     total_num:20000,
//     open_date: '2020/06/15',
//     remark:'new company'
//   },
//   {
//     company_name:'JPG',
//     stock_exchange:'NSE',
//     price_per_share:70,
//     total_num:27777,
//     open_date: '2002/05/12',
//     remark:'pay attention'
//   },
//   {
//     company_name:'DWK',
//     stock_exchange:'NSE',
//     price_per_share:77,
//     total_num:16353,
//     open_date: '2012/07/12',
//     remark:''
//   },
//   {
//     company_name:'HFJ',
//     stock_exchange:'BSE',
//     price_per_share:300,
//     total_num:77245,
//     open_date: '1999/02/19',
//     remark:'old company'
//   },
//   {
//     company_name:'JPG',
//     stock_exchange:'NSE',
//     price_per_share:70,
//     total_num:50937,
//     open_date: '2005/09/12',
//     remark:''
//   },
//   {
//     company_name:'HTL',
//     stock_exchange:'BSE',
//     price_per_share:280,
//     total_num:64540,
//     open_date: '2016/12/28',
//     remark:''
//   },
// ]

@Component({
  selector: 'app-ipo-list',
  templateUrl: './ipo-list.component.html',
  styleUrls: ['./ipo-list.component.css']
})
export class IPOListComponent implements OnInit {
  ipolists: Object;
  // ipolists=IPOLISTS
  constructor(public UserService: UserService,private http: HttpClient) { }

  ngOnInit(): void {
    this.UserService.getIpoList().subscribe((data) => {
        console.log(data)
        this.ipolists = data
      })
  }

}

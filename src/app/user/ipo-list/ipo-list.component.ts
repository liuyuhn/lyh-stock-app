import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service'
import { HttpClient, HttpHeaders } from '@angular/common/http' 

interface ipolistinfo{
  comname:string;
  stockexchange:string;
  pershare:number;
  totalnum:number;
  opendate:string;
  remarks:string
}
const IPOLISTS: ipolistinfo[] =[
  {
    comname:'YPO',
    stockexchange:'BSE',
    pershare:80,
    totalnum:20000,
    opendate: '2020/06/15',
    remarks:'new company'
  },
  {
    comname:'JPG',
    stockexchange:'NSE',
    pershare:70,
    totalnum:27777,
    opendate: '2002/05/12',
    remarks:'pay attention'
  },
  {
    comname:'DWK',
    stockexchange:'NSE',
    pershare:77,
    totalnum:16353,
    opendate: '2012/07/12',
    remarks:''
  },
  {
    comname:'HFJ',
    stockexchange:'BSE',
    pershare:300,
    totalnum:77245,
    opendate: '1999/02/19',
    remarks:'old company'
  },
  {
    comname:'JPG',
    stockexchange:'NSE',
    pershare:70,
    totalnum:50937,
    opendate: '2005/09/12',
    remarks:''
  },
  {
    comname:'HTL',
    stockexchange:'BSE',
    pershare:280,
    totalnum:64540,
    opendate: '2016/12/28',
    remarks:''
  },
]

@Component({
  selector: 'app-ipo-list',
  templateUrl: './ipo-list.component.html',
  styleUrls: ['./ipo-list.component.css']
})
export class IPOListComponent implements OnInit {
  ipolists=IPOLISTS
  constructor(public UserService: UserService,private http: HttpClient) { }

  ngOnInit(): void {
    this.UserService.getIpoList().subscribe((data) => {
        console.log(data)
        // this.ipolists = data
      })
  }

}

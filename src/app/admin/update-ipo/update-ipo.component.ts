import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { AdminService } from 'src/app/service/admin.service'

interface ipoinfo{
  company_name:string;
  stock_exchange:string;
  price_per_share:number;
  total_num:number;
  open_date:string;
  remark:string
}
// const IPOINFOS: ipoinfo[] =[
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
  selector: 'app-update-ipo',
  templateUrl: './update-ipo.component.html',
  styleUrls: ['./update-ipo.component.css']
})
export class UpdateIpoComponent implements OnInit {
  //  ipoinfos = IPOINFOS
   ipoForm = this.fb.group({
    company_name: ['', Validators.required],
    stock_exchange: ['', Validators.required],
    price_per_share: ['', Validators.required],
    total_num: ['', Validators.required], 
    open_date: ['', Validators.required], 
    remark: ['', Validators.required] 
  })
  ipoinfos: Object;
  // cominfos: Object;
   
  constructor(private fb: FormBuilder, private modalService: NgbModal, public AdminService:AdminService) { }

  ngOnInit(): void {
    this.AdminService.getIpoDetail().subscribe((data) => {
      console.log(data)
      this.ipoinfos = data
    })
  }

  closeResult = '';
  open(content, index) {
    console.log('111111index', index)
    // this.cominfos(index,1)
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    //弹出框的input框里拿到当前选中数据的值--
    console.log('cominfo', this.ipoinfos)
    this.ipoForm.setValue({
      company_name: this.ipoinfos[index].company_name,
      stock_exchange: this.ipoinfos[index].stock_exchange,
      price_per_share: this.ipoinfos[index].price_per_share,
      total_num: this.ipoinfos[index].total_num,
      open_date: this.ipoinfos[index].open_date,
      remark: this.ipoinfos[index].remark
    })
    this.ipoinfos[index] = this.ipoForm.value
    // console.log('ipoForm', this.ipoForm)
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onSubmit() {
    console.warn(this.ipoForm.value);
    this.AdminService.postUpIpo(this.ipoForm.value).subscribe((data) => {
      console.log(data)
      // this.result = data
    })
  }

  

}

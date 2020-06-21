import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { AdminService } from 'src/app/service/admin.service'

interface exchangeInfo {
  // id: number;
  stock_exchange: string;
  brief: string;
  contact_address: string;
  remark: string;
}
// const EXINFOS: exchangeInfo[] = [
//   {
//     // id: 1,
//     stock_exchange: 'BSE',
//     brief: 'Bse Stock Exchange',
//     contact_address: 'Canada',
//     remark: 'Canada BSE'
//   },
//   {
//     // id: 1,
//     stock_exchange: 'NSE',
//     brief: 'New Stock Exchange',
//     contact_address: 'Asia',
//     remark: 'Asia NSE'
//   }
// ]

@Component({
  selector: 'app-manage-exchange',
  templateUrl: './manage-exchange.component.html',
  styleUrls: ['./manage-exchange.component.css']
})
export class ManageExchangeComponent implements OnInit {
  // exinfos = EXINFOS;
  manageExForm = this.fb.group({
    stock_exchange: ['', Validators.required],
    brief: ['', Validators.required],
    contact_address: ['', Validators.required],
    remark: ['', Validators.required] 
  })
  manageAddExForm = this.fb.group({
    stock_exchange: ['', Validators.required],
    brief: ['', Validators.required],
    contact_address: ['', Validators.required],
    remark: ['', Validators.required] 
  })
  exinfos: Object;

  constructor(private fb: FormBuilder, private modalService: NgbModal, public AdminService:AdminService) { }

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
    console.log('cominfo', this.exinfos)
    this.manageExForm.setValue({
      stock_exchange: this.exinfos[index].stock_exchange,
      brief: this.exinfos[index].brief,
      contact_address: this.exinfos[index].contact_address,
      remark: this.exinfos[index].remark
    })
    this.exinfos[index] = this.manageExForm.value
    console.log('manageExForm', this.manageExForm)
  }

  addopen(addcontent) {
    // this.cominfos(index,1)
    this.modalService.open(addcontent, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    //弹出框的input框里拿到当前选中数据的值--
  }
  //--弹出框的input框里拿到当前选中数据的值
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
    console.warn(this.manageExForm.value);
    this.AdminService.postUpExchange(this.manageExForm.value).subscribe((msg) => {
      console.log(msg)
      // this.result = data
    })
  }

  addSubmit() {
    console.warn(this.manageAddExForm.value);
    this.AdminService.postAddExchange(this.manageAddExForm.value).subscribe((msg) => {
      console.log(msg)
      // this.result = data
    })
  }

  ngOnInit(): void {
    this.AdminService.getExchangeList().subscribe((data) => {
      console.log(data)
      this.exinfos = data
    })
  }

}

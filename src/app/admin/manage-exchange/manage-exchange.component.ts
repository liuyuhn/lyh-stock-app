import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http'

interface exchangeInfo {
  // id: number;
  stockchange: string;
  exbrief: string;
  conaddress: string;
  remark: string;
}
const EXINFOS: exchangeInfo[] = [
  {
    // id: 1,
    stockchange: 'BSE',
    exbrief: 'Bse Stock Exchange',
    conaddress: 'Canada',
    remark: 'Canada BSE'
  },
  {
    // id: 1,
    stockchange: 'NSE',
    exbrief: 'New Stock Exchange',
    conaddress: 'Asia',
    remark: 'Asia NSE'
  }
]

@Component({
  selector: 'app-manage-exchange',
  templateUrl: './manage-exchange.component.html',
  styleUrls: ['./manage-exchange.component.css']
})
export class ManageExchangeComponent implements OnInit {
  exinfos = EXINFOS;
  manageExForm = this.fb.group({
    stockchange: ['', Validators.required],
    exbrief: ['', Validators.required],
    conaddress: ['', Validators.required],
    remark: ['', Validators.required] 
  })

  constructor(private fb: FormBuilder, private modalService: NgbModal) { }

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
      stockchange: this.exinfos[index].stockchange,
      exbrief: this.exinfos[index].exbrief,
      conaddress: this.exinfos[index].conaddress,
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
    console.log('cominfo', this.exinfos)
    console.log('manageExForm', this.manageExForm)
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
  }

  ngOnInit(): void {
  }

}

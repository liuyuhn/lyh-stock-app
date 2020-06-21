import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { AdminService } from 'src/app/service/admin.service'

//--数据接口和假数据
interface companyInfo {
  company_code: number;
  company_name: string;
  turnover: number;
  ceo: string;
  board_of_director: string;
  listed_in_se: string;
  sector_name: string;
  brife_write_up: string;
  stock_code: number;
  company_status: string;
}
// const COMINFOS: companyInfo[] = [
//   {
//     company_code: 111111,
//     company_name: 'TOYOTA',
//     turnover: 8746734.00,
//     ceo: 'Rose',
//     board_of_director: 'Group director',
//     listed_in_se: 'Yes',
//     sector_name: 'Auto',
//     brife_write_up: 'Japan cars',
//     stock_code: 776453,
//     company_status: 'Yes'
//   },
//   {
//     company_code: 222222,
//     company_name: 'BMW',
//     turnover: 4675539.00,
//     ceo: 'Jack',
//     board_of_director: 'Group director',
//     listed_in_se: 'No',
//     sector_name: 'Auto',
//     brife_write_up: 'Germen cars',
//     stock_code: 456329,
//     company_status: 'Yes'
//   },
//   {
//     company_code: 333333,
//     company_name: 'Amarni',
//     turnover: 4562234.00,
//     ceo: 'Rainbow',
//     board_of_director: 'Group director',
//     listed_in_se: 'Yes',
//     sector_name: 'Make up',
//     brife_write_up: 'Beauty',
//     stock_code: 456223,
//     company_status: 'Yes'
//   },
//   {
//     company_code: 444444,
//     company_name: 'Dior',
//     turnover: 4563834.00,
//     ceo: 'Hermn',
//     board_of_director: 'Group director',
//     listed_in_se: 'No',
//     sector_name: 'Make up',
//     brife_write_up: 'Lipstick',
//     stock_code: 4453339,
//     company_status: 'Yes'
//   },
//   {
//     company_code: 555555,
//     company_name: 'Mac',
//     turnover: 4534532.00,
//     ceo: 'Heedy',
//     board_of_director: 'Group director',
//     listed_in_se: 'Yes',
//     sector_name: 'AMake up',
//     brife_write_up: 'foundation make-up',
//     stock_code: 354446,
//     company_status: 'Yes'
//   },
// ]
//数据接口和假数据--

@Component({
  selector: 'app-manage-company',
  templateUrl: './manage-company.component.html',
  styleUrls: ['./manage-company.component.css']
})
export class ManageCompanyComponent implements OnInit {
  // cominfos = COMINFOS;
  manageComForm = this.fb.group({
    company_code: ['', Validators.required],
    company_name: ['', Validators.required],
    turnover: ['', Validators.required],
    ceo: ['', Validators.required],
    board_of_director: ['', Validators.required],
    listed_in_se: ['', Validators.required],
    sector_name: ['', Validators.required],
    brife_write_up: ['', Validators.required],
    stock_code: ['', Validators.required],
    company_status: ['', Validators.required]
  })
  updatemanageComForm = this.fb.group({
    company_code: ['', Validators.required],
    company_name: ['', Validators.required],
    turnover: ['', Validators.required],
    ceo: ['', Validators.required],
    board_of_director: ['', Validators.required],
    listed_in_se: ['', Validators.required],
    sector_name: ['', Validators.required],
    brife_write_up: ['', Validators.required],
    stock_code: ['', Validators.required],
    company_status: ['', Validators.required]
  })
  cominfos: Object;
  
  constructor(private fb: FormBuilder, private modalService: NgbModal,public AdminService: AdminService) { }
  //--弹出框
  closeResult = '';
  open(content, index) {
    console.log('111111index', index)
    console.log('company_code', this.cominfos[index].company_code)
    // this.cominfos(index,1)
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    //弹出框的input框里拿到当前选中数据的值--
    console.log('cominfo', this.cominfos)
    this.manageComForm.setValue({
      company_code: this.cominfos[index].company_code,
      company_name: this.cominfos[index].company_name,
      turnover: this.cominfos[index].turnover,
      ceo: this.cominfos[index].ceo,
      board_of_director: this.cominfos[index].board_of_director,
      listed_in_se: this.cominfos[index].listed_in_se,
      sector_name: this.cominfos[index].sector_name,
      brife_write_up: this.cominfos[index].brife_write_up,
      stock_code: this.cominfos[index].stock_code,
      company_status: this.cominfos[index].company_status,
    })
    this.cominfos[index] = this.manageComForm.value
    console.log('manageComForm', this.manageComForm)
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
  //弹出框--

  openadd(addcontent) {
    this.modalService.open(addcontent, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  //--获取弹出框update的值
 
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.manageComForm.value);
    this.AdminService.postUpdateCom(this.manageComForm.value).subscribe((msg) => {
      console.log(msg)
      // this.result = data
    })
  }
  
  updateSubmit(){
    console.warn(this.updatemanageComForm.value);
    this.AdminService.postEditCom(this.updatemanageComForm.value).subscribe((msg) => {
      console.log(msg)
      // this.result = data
    })
  }

  //获取弹出框update的值--
  ngOnInit(): void {
    this.cominfos
    this.AdminService.getComList().subscribe((data) => {
      console.log(data)
      this.cominfos = data
    })
    console.log('cominfo11111', this.cominfos)
    console.log('lllllllll', this.manageComForm)
  }

}

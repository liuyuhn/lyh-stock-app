import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http'
//--数据接口和假数据
interface companyInfo {
  code: number;
  name: string;
  turnovers: number;
  ceo: string;
  board: string;
  list: string;
  sector: string;
  brief: string;
  stock: number;
  inuse: string;
}
const COMINFOS: companyInfo[] = [
  {
    code: 111111,
    name: 'TOYOTA',
    turnovers: 8746734.00,
    ceo: 'Rose',
    board: 'Group director',
    list: 'Yes',
    sector: 'Auto',
    brief: 'Japan cars',
    stock: 776453,
    inuse: 'Yes'
  },
  {
    code: 222222,
    name: 'BMW',
    turnovers: 4675539.00,
    ceo: 'Jack',
    board: 'Group director',
    list: 'No',
    sector: 'Auto',
    brief: 'Germen cars',
    stock: 456329,
    inuse: 'Yes'
  },
  {
    code: 333333,
    name: 'Amarni',
    turnovers: 4562234.00,
    ceo: 'Rainbow',
    board: 'Group director',
    list: 'Yes',
    sector: 'Make up',
    brief: 'Beauty',
    stock: 456223,
    inuse: 'Yes'
  },
  {
    code: 444444,
    name: 'Dior',
    turnovers: 4563834.00,
    ceo: 'Hermn',
    board: 'Group director',
    list: 'No',
    sector: 'Make up',
    brief: 'Lipstick',
    stock: 4453339,
    inuse: 'Yes'
  },
  {
    code: 555555,
    name: 'Mac',
    turnovers: 4534532.00,
    ceo: 'Heedy',
    board: 'Group director',
    list: 'Yes',
    sector: 'AMake up',
    brief: 'foundation make-up',
    stock: 354446,
    inuse: 'Yes'
  },
]
//数据接口和假数据--

@Component({
  selector: 'app-manage-company',
  templateUrl: './manage-company.component.html',
  styleUrls: ['./manage-company.component.css']
})
export class ManageCompanyComponent implements OnInit {
  cominfos = COMINFOS;
  manageComForm = this.fb.group({
    code: ['', Validators.required],
    name: ['', Validators.required],
    turnovers: ['', Validators.required],
    ceo: ['', Validators.required],
    board: ['', Validators.required],
    list: ['', Validators.required],
    sector: ['', Validators.required],
    brief: ['', Validators.required],
    stock: ['', Validators.required],
    inuse: ['', Validators.required]
  })
  updatemanageComForm = {}
  
  constructor(private fb: FormBuilder, private modalService: NgbModal) { }
  //--弹出框
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
    console.log('cominfo', this.cominfos)
    this.manageComForm.setValue({
      code: this.cominfos[index].code,
      name: this.cominfos[index].name,
      turnovers: this.cominfos[index].turnovers,
      ceo: this.cominfos[index].ceo,
      board: this.cominfos[index].board,
      list: this.cominfos[index].list,
      sector: this.cominfos[index].sector,
      brief: this.cominfos[index].brief,
      stock: this.cominfos[index].stock,
      inuse: this.cominfos[index].inuse,
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
    //弹出框的input框里拿到当前选中数据的值--
    console.log('cominfo', this.cominfos)
    console.log('manageComForm', this.manageComForm)
  }

  //--获取弹出框update的值
 
  onSubmit() {
    // console.log('222222',this.manageComForm.value)
    // TODO: Use EventEmitter with form value
    console.warn(this.manageComForm.value);
    // this.cominfo = this.manageComForm.value
  }
  
  //获取弹出框update的值--
  ngOnInit(): void {
    // this.cominfos
    console.log('cominfo11111', this.cominfos)
    console.log('lllllllll', this.manageComForm)
  }

}

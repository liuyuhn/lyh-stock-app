import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http'

interface ipoinfo{
  comname:string;
  stockexchange:string;
  pershare:number;
  totalnum:number;
  opendate:string;
  remarks:string
}
const IPOINFOS: ipoinfo[] =[
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
  selector: 'app-update-ipo',
  templateUrl: './update-ipo.component.html',
  styleUrls: ['./update-ipo.component.css']
})
export class UpdateIpoComponent implements OnInit {
   ipoinfos = IPOINFOS
   ipoForm = this.fb.group({
    comname: ['', Validators.required],
    stockexchange: ['', Validators.required],
    pershare: ['', Validators.required],
    totalnum: ['', Validators.required], 
    opendate: ['', Validators.required], 
    remarks: ['', Validators.required] 
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
    console.log('cominfo', this.ipoinfos)
    this.ipoForm.setValue({
      comname: this.ipoinfos[index].comname,
      stockexchange: this.ipoinfos[index].stockexchange,
      pershare: this.ipoinfos[index].pershare,
      totalnum: this.ipoinfos[index].totalnum,
      opendate: this.ipoinfos[index].opendate,
      remarks: this.ipoinfos[index].remarks
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
  }

  ngOnInit(): void {
  }

}

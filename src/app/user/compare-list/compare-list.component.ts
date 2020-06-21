import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { NgbDateStruct, NgbDate, NgbCalendar, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/service/user.service'
import * as Highcharts from 'highcharts';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-compare-list',
  templateUrl: './compare-list.component.html',
  styleUrls: ['./compare-list.component.css'],
})
export class CompareListComponent {
  public isCollapsed = true;
  public isComCollapsed = true;
  public isSubCollapsed = true;
  public isMerCollapsed = true;
  firstchartForm = this.fb.group({
    specify: ['', Validators.required],
    fromdate: ['', Validators.required],
    todate: ['', Validators.required],
    coorse: ['', Validators.required],
    stockex: ['', Validators.required],
    comname: ['', Validators.required]
  });
  secondchartForm = this.fb.group({
    specify: ['', Validators.required],
    fromdate: ['', Validators.required],
    todate: ['', Validators.required],
    coorse: ['', Validators.required],
    stockex: ['', Validators.required],
    comname: ['', Validators.required]
  });
  result: any;
  pricedata: any;
  newinfo: any;
  // Highcharts = Highcharts;
  constructor(private calendar: NgbCalendar, public formatter: NgbDateParserFormatter, private fb: FormBuilder, public UserService: UserService) {
  }
  newchartOptions: Highcharts.Options = {
    series: []
  }

  // chartOptions = this.newchartOptions
  //timrpicker拿值
  model: NgbDateStruct;
  models: NgbDateStruct;
  modelt: NgbDateStruct;
  modelf: NgbDateStruct;

  onSubmit() {
    this.isCollapsed = !this.isCollapsed
    // TODO: Use EventEmitter with form value
    this.firstchartForm.setValue({
      specify: this.firstchartForm.value.specify,
      fromdate: this.firstchartForm.value.fromdate,
      todate: this.firstchartForm.value.todate,
      coorse: this.firstchartForm.value.coorse,
      stockex: this.firstchartForm.value.stockex,
      comname: this.firstchartForm.value.comname
    })
    console.warn(this.firstchartForm.value);
    this.UserService.postCompareCom(this.firstchartForm.value).subscribe((priceInfo) => {
      console.log('data', priceInfo)//data为后台传来的返回消息
      this.result = priceInfo
      this.pricedata = this.result.priceInfo
      console.log('firstchart', this.pricedata)
      // const newinfo = [];
      // this.pricedata.forEach(function (i) {
      //   console.log('777777777',i)
      //   newinfo.push({
      //     newprice: i.price
      //   })
      //   console.log('99999',newinfo)
      //   console.log('1111111', newinfo[0].newprice)
      //   // console.log('222222', newinfo[1].newprice)
      //   this.newchartOptions = {
      //     series: [{
      //       name: 'first company',
      //       data: [12,13,15,22,10,30,20]
      //     }]
      //   }
      // });
    })
  }

  Submit() {
    this.isSubCollapsed = !this.isSubCollapsed
    // TODO: Use EventEmitter with form value
    this.secondchartForm.setValue({
      specify: this.secondchartForm.value.specify,
      fromdate: this.secondchartForm.value.fromdate,
      todate: this.secondchartForm.value.todate,
      coorse: this.secondchartForm.value.coorse,
      stockex: this.secondchartForm.value.stockex,
      comname: this.secondchartForm.value.comname
    })
    console.warn('第二个表', this.secondchartForm.value);
    this.UserService.postCompareCom(this.secondchartForm.value).subscribe((data) => {
      console.log('data', data)//data为后台传来的返回消息
      this.result = data
      console.log('secondchart', this.result)
    })
    console.log('tttttt)', this.secondchartForm.value)
  }
  //highchart
  Highcharts = Highcharts;

  chartOptions = {
    title: {
      text: 'STOCK PRICE COMPARATION'                 // 标题
    },
    xAxis:{
      categories: ['2020-05-01', '2020-05-02', '2020-05-03','2020-05-04','2020-05-05','2020-05-06']
   },
    series: [{
      name: 'first company',
      data: [177.54, 122.35, 134.64, 155.42, 98.34, 124.54]
    }]
  };
  // chartComOptions
  chartComOptions = {
    title: {
      text: 'STOCK PRICE COMPARATION'                 // 标题
    },
    xAxis:{
      categories: ['2020-05-01', '2020-05-02', '2020-05-03','2020-05-04','2020-05-05','2020-05-06']
   },
    series: [{
      name: 'compare company',
      data: [122.32, 109.34, 162.32, 98.34, 132.39, 163.23]
    }]
  };
  mergeComOptions
  merComOptions = {
    xAxis:{
      categories: ['2020-05-01', '2020-05-02', '2020-05-03','2020-05-04','2020-05-05','2020-05-06']
   },
    series: [{
      name: 'first company',
      data: [177.54, 122.35, 134.64, 155.42, 98.34, 124.54]
    }, {
        name: 'compare company',
        data: [122.32, 109.34, 162.32, 98.34, 132.39, 163.23]
      }]
  };
  ngOnInit() {
   
  }
  
}

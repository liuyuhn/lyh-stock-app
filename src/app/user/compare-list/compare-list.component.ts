import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { NgbDateStruct, NgbDate, NgbCalendar, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/service/user.service'
import * as Highcharts from 'highcharts';

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
  constructor(private calendar: NgbCalendar, public formatter: NgbDateParserFormatter, private fb: FormBuilder, public UserService: UserService) {
  }

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
      fromdate: this.model,
      todate: this.models,
      coorse: this.firstchartForm.value.coorse,
      stockex: this.firstchartForm.value.stockex,
      comname: this.firstchartForm.value.comname
    })
    console.warn(this.firstchartForm.value);
    this.UserService.postCompareCom(this.firstchartForm.value).subscribe((data) => {
      console.log('data',data)//data为后台传来的返回消息
      this.result = data
      console.log('firstchart',this.result)
    })
    console.log('jjjjjjj)', this.firstchartForm.value)
  }
  // result(arg0: string, result: any) {
  //   throw new Error("Method not implemented.");
  // }

  Submit() {
    this.isSubCollapsed = !this.isSubCollapsed
    // TODO: Use EventEmitter with form value
    this.secondchartForm.setValue({
      specify: this.secondchartForm.value.specify,
      fromdate: this.modelt,
      todate: this.modelf,
      coorse: this.secondchartForm.value.coorse,
      stockex: this.secondchartForm.value.stockex,
      comname: this.secondchartForm.value.comname
    })
    console.warn('第二个表', this.secondchartForm.value);
    this.UserService.postCompareCom(this.secondchartForm.value).subscribe((data) => {
      console.log('data',data)//data为后台传来的返回消息
      this.result = data
      console.log('secondchart',this.result)
    })
    console.log('tttttt)', this.secondchartForm.value)
  }
  //highchart
  Highcharts = Highcharts;
  chartOptions = {
    title: {
      text: 'STOCK PRICE COMPARATION'                 // 标题
    },
    series: [{
      name: 'first company',
      data: [11, 22, 33, 44, 55, 66]
    }]
  };
  //chartComOptions
  chartComOptions = {
    title: {
      text: 'STOCK PRICE COMPARATION'                 // 标题
    },
    series: [{
      name: 'compare company',
      data: [13, 15, 39, 38, 66, 49]
    }]
  };
  //mergeComOptions
  merComOptions = {
    series: [{
      name: 'first company',
      data: [11, 22, 33, 44, 55, 66]
    }, {
      name: 'compare company',
      data: [13, 15, 39, 38, 66, 49]
    }]
  };
  ngOnInit() {
    // this.fromDate
    // this.toDate
    // console.log('1', this.chartOptions)
    // console.log('2', this.Highcharts)
  }
  // genMap() {
  //   this.Highcharts = Highcharts
  //   const newchartOptions = {
  //     title: {
  //       text: 'STOCK PRICE COMPARATION'                 // 标题
  //     },
  //     series: [{
  //       data: [11, 22, 33, 44, 55, 66]
  //     }]
  //   }
  //   this.chartOptions = newchartOptions
  //   console.log('3', this.chartOptions)
  //   console.log('4', this.Highcharts)
  // }
  // addCompare(){

  // }
}

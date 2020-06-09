import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { NgbDate, NgbCalendar, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
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
    fromdate: [''],
    todate: [''],
    coorse: ['', Validators.required],
    stockex: ['', Validators.required],
    comname: ['', Validators.required]
  });
  secondchartForm = this.fb.group({
    specify: ['', Validators.required],
    fromdate: [''],
    todate: ['', Validators.required],
    coorse: ['', Validators.required],
    stockex: ['', Validators.required],
    comname: ['', Validators.required]
  });

  hoveredDate: NgbDate | null = null;
  fromDate: NgbDate | null;
  toDate: NgbDate | null;

  constructor(private calendar: NgbCalendar, public formatter: NgbDateParserFormatter, private fb: FormBuilder) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
      
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
      console.log('date',date)
    } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    // console.log('parse(input)',this.formatter)
    // console.log(111111111111111)
    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
  }

  // datepicker(fromDate,toDate){
  //   this.firstchartForm.setValue({
  //     specify: this.firstchartForm.value.specify,
  //     fromdate: this.formatter.format(fromDate),
  //     todate: this.formatter.format(toDate),
  //     coorse: this.firstchartForm.value.coorse,
  //     stockex: this.firstchartForm.value.stockex,
  //     comname: this.firstchartForm.value.comname
  //   })
  // }


  onSubmit() {
    this.isCollapsed = !this.isCollapsed
    // TODO: Use EventEmitter with form value
    this.firstchartForm.setValue({
          specify: this.firstchartForm.value.specify,
          fromdate: this.formatter.format(this.fromDate),
          todate: this.formatter.format(this.toDate),
          coorse: this.firstchartForm.value.coorse,
          stockex: this.firstchartForm.value.stockex,
          comname: this.firstchartForm.value.comname
        })
    console.warn(this.firstchartForm.value);
    console.log('jjjjjjj)',this.firstchartForm.value)
  }

  submit() {
    this.isSubCollapsed = !this.isSubCollapsed
    // TODO: Use EventEmitter with form value
    this.secondchartForm.setValue({
          specify: this.secondchartForm.value.specify,
          fromdate: this.formatter.format(this.fromDate),
          todate: this.formatter.format(this.toDate),
          coorse: this.secondchartForm.value.coorse,
          stockex: this.secondchartForm.value.stockex,
          comname: this.secondchartForm.value.comname
        })
    console.warn('第二个表',this.secondchartForm.value);
    console.log('tttttt)',this.secondchartForm.value)
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
    this.fromDate
    this.toDate
    console.log('1', this.chartOptions)
    console.log('2', this.Highcharts)
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

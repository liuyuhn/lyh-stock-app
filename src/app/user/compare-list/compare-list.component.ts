import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgbDate, NgbCalendar, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import * as Highcharts from 'highcharts';
// import { QuestionService } from 'src/app/service/question.service';
// import { QuestionBase }    from 'src/app/class/question-base';
// import { Observable }      from 'rxjs';


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
  profileForm = new FormGroup({
    // spePeriod: new FormControl(''),
    // lastName: new FormControl(''),
  });
  subForm = new FormGroup({
    // spePeriod: new FormControl(''),
    // lastName: new FormControl(''),
  });
  hoveredDate: NgbDate | null = null;
  fromDate: NgbDate | null;
  toDate: NgbDate | null;

  constructor(private calendar: NgbCalendar, public formatter: NgbDateParserFormatter) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
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
    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
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
    this.ngOnInit
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

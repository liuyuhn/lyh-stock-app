import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-generate-chart',
  templateUrl: './generate-chart.component.html',
  styleUrls: ['./generate-chart.component.css']
})
export class GenerateChartComponent implements OnInit {
  // mapOptions: Highcharts.Options = {
  //   title:{text: 'STOCK PRICE COMPARATION'},
  //   series:[]
  // };
  // chartCallback = (chart) => { this.genChart = chart; };
  // init(){
  //   this.init()
  // }

  Highcharts = {};
  chartOptions = {
    title: {},
    series: [{}]
  };
  ngOnInit() {
    this.ngOnInit
    console.log('1', this.chartOptions)
    console.log('2', this.Highcharts)
  }
  // chartOptions = this.mapOptions;
  genMap() {
    // const series = [{data:[1,2,3]}]
    this.Highcharts = Highcharts
    const newchartOptions = {
      title: {
        text: 'STOCK PRICE COMPARATION'                 // 标题
      },
      series: [{
        data: [11, 22, 33, 44, 55, 66]
      }]
    }
    this.chartOptions = newchartOptions
    console.log('3', this.chartOptions)
    console.log('4', this.Highcharts)
    // const series= [{
    //     data: [1, 2, 3]
    //   }]
    //  if (series) {
    //   console.log('2',this.mapOptions)
    //   this.chartOptions.series =this.mapOptions.series
    //  }else{
    //    this.chartOptions.series =this.mapOptions.series
    //  }
  };
  // console.log(this.chart)
  //hightchart
  // private chart: Highcharts.Chart;
  // private optionsValue: Highcharts.Options;

  // genChart() {
  //   const optionsValue = {
  //     series: [{
  //       data: [1, 2]
  //   }]
  //   }
  //   if (optionsValue) {
  //     this.optionsValue
  //   }
  // };
  // @Output() mapChart = new EventEmitter<string>();
  //highchart
  constructor() { }


  // ngOnDestroy() { // #44
  //   if (this.chart) {  // #56
  //     this.chart.destroy();
  //     this.chart = null;
  //   }
  // }
}

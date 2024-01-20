import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';
import { LoginService } from '../service/login.service';
import { Chart_ExportLcl } from '../model/user-details.model';

HighchartsMore(Highcharts);
HighchartsSolidGauge(Highcharts);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})


export class ChartComponent implements OnInit  {

  public exportlclarea : any;
  public exportlclStackedarea = [{}]; ;
  datasource_export_LCL_CS = [{}];
  exportlcl_cs_sc_xAxis:string[] = []; 

  constructor ( private loginService: LoginService) {   }
  
  public ngOnInit(): void {

    this.get_export_lcl_Customer_Info();
    this.get_export_lcl_Customer_Info_stackedChart();
  }
 
  
  showExport_CS_LCL_Chart () {
    this.export_lcl_cs_chartData.series = this.exportlclarea;       // assign data to the series.
    Highcharts.chart('div-container', this.export_lcl_cs_chartData);    // Update the chart.
  }

 

  public export_lcl_cs_chartData: any = {
    chart: {
      type: 'column'
    },

    xAxis: {    // the 'x' axis or 'category' axis.
        categories: ['jan', 'feb', 'mar']
    },

    title: {
        text: 'Customer Service (LCL)'
    },

    series: [
      { 
        data: []
      }
    ],
    
    colors: ['#000', 'rgb(102,203,22)', 'red', '#9e77f3', '#034C65'],

    tooltip: {
        backgroundColor: '#FCFFC5'
    }
  }


  get_export_lcl_Customer_Info() {

    const emptyList1: Chart_ExportLcl[] = [];
    this.loginService.getExportLCLCustomerServiceInfo()
      .subscribe(
        (response) => {
          this.datasource_export_LCL_CS = response;
          // Handle the response data here
          console.log('Response:', this.datasource_export_LCL_CS);
          response.map( (x: { action: any; count: any })  => {
           var chart_exportlcl = new Chart_ExportLcl(x.action , [x.count]);
           emptyList1.push(chart_exportlcl);
                
          })
          this.exportlclarea = emptyList1;    // populate array with json.
          this.showExport_CS_LCL_Chart();         // show the chart.
        },
        (error) => {
          // Handle any errors here
          console.error('Error:', error);
        }
      );
  }


  showExport_CS_LCL_StackedChart () {
    this.stackedChartData.series = this.exportlclStackedarea;   
    this.stackedChartData.xAxis.categories = this.exportlcl_cs_sc_xAxis;       // assign data to the series.
    Highcharts.chart('div-container-stackedchart', this.stackedChartData);    // Update the chart.
  }

  public stackedChartData: any = {
    chart: {
      type: 'column'
    },

    xAxis: {    // the 'x' axis or 'category' axis.
        categories: ['1', '2', '3' , '4' ,'5' ,'6' , '7']
    },
    yAxis: {
      min: 0,      
      title: {
          text: 'Count'
      },
      stackLabels: {
          enabled: true,
          style: {
              fontWeight: 'bold',
              color: (Highcharts.theme) || 'gray'
          }
      }
  },
  legend: {
    align: 'right',
    x: -70,
    verticalAlign: 'top',
    y: 20,
    floating: true,
    backgroundColor: (Highcharts.theme ) || 'white',
    borderColor: '#CCC',
    borderWidth: 1,
    shadow: false,    
},
plotOptions: {
  series: {
    stacking: 'normal'
  }
},
    title: {
        text: 'Customer Service (LCL)'
    },

    series: [
      { 
        data: []
      }
    ],
    
    colors: ['#000', 'rgb(102,203,22)', 'red', '#9e77f3', '#034C65'],

    tooltip: {
        backgroundColor: '#FCFFC5'
    }
  }


  get_export_lcl_Customer_Info_stackedChart() {

    const emptyList1: Chart_ExportLcl[] = [];
    let withinSlaList:string[] = []; 
    let outOfSlaList:string[] = []; 
    let totalList:string[] = []; 

    this.loginService.getExportLCLCustomerServiceInfo()
      .subscribe(
        (response) => {
          this.datasource_export_LCL_CS = response;
          // Handle the response data here
       
       
          response.map( (y: any) => {
            if(y.count != 1726) {
              withinSlaList.push(y.withinSLA)
              outOfSlaList.push(y.outOfSLA)
              totalList.push(y.count)
              this.exportlcl_cs_sc_xAxis.push(y.action)
            }
          })
          this.exportlclStackedarea.push({"name" : "withinsla" , "data" : withinSlaList});
          this.exportlclStackedarea.push({"name" : "outofSLA" , "data" : outOfSlaList});
          this.exportlclStackedarea.push({"name" : "total" , "data" : totalList});
          console.log(JSON.stringify(this.exportlclStackedarea))
          this.showExport_CS_LCL_StackedChart();         // show the chart.
        },
        (error) => {
          // Handle any errors here
          console.error('Error:', error);
        }
      );
  }

  
}
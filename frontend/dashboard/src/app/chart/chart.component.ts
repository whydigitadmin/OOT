import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';
import { LoginService } from '../service/login.service';
import { Chart_ExportLcl } from '../model/user-details.model';
import { ExportLclWithinslaReportComponent } from '../report/sea-export/export-lcl-report/export-lcl-withinsla-report/export-lcl-withinsla-report.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ExportLclOutofslaReportComponent } from '../report/sea-export/export-lcl-report/export-lcl-outofsla-report/export-lcl-outofsla-report.component';
import { ExportLclReportComponent } from '../report/sea-export/export-lcl-report/export-lcl-report/export-lcl-report.component';

HighchartsMore(Highcharts);
HighchartsSolidGauge(Highcharts);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})


export class ChartComponent implements OnInit {

  public exportlclarea: any;
  public exportfclarea: any;
  public exportPlannerarea: any;
  public exportDocumentationarea: any;
  public exportlclStackedarea = [{}];
  public exportfclStackedarea = [{}];
  public exportPlannerStackedarea = [{}];
  public exportDocumentationStackedarea = [{}];
  datasource_export_LCL_CS = [{}];
  datasource_export_FCL_CS = [{}];
  datasource_export_Planner_CS = [{}];
  datasource_export_Documentation_CS = [{}];
  exportlcl_cs_sc_xAxis: string[] = [];
  exportfcl_cs_sc_xAxis: string[] = [];
  exportPlanner_cs_sc_xAxis: string[] = [];
  exportDocumentation_cs_sc_xAxis: string[] = [];

  constructor(private loginService: LoginService, private dialog: MatDialog) { }

  public ngOnInit(): void {

    this.get_export_lcl_Customer_Info();
    this.get_export_lcl_Customer_Info_stackedChart();
    this.get_export_fcl_Customer_Info();
    this.get_export_fcl_Customer_Info_stackedChart();
    this.get_export_Planner_Customer_Info();
    this.get_export_Planner_Customer_Info_stackedChart();
    this.get_export_Documentation_Customer_Info();
    this.get_export_Documentation_Customer_Info_stackedChart();
  }


  showExport_CS_LCL_Chart() {
    this.export_lcl_cs_chartData.series = this.exportlclarea;       // assign data to the series.
    Highcharts.chart('div-container', this.export_lcl_cs_chartData);    // Update the chart.
  }



  public export_lcl_cs_chartData: any = {
    chart: {
      type: 'column'
    },
    credits: { enabled: false },
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
          response.map((x: { action: any; count: any }) => {
            var chart_exportlcl = new Chart_ExportLcl(x.action, [x.count]);
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

  get_export_fcl_Customer_Info() {

    const emptyList1: Chart_ExportLcl[] = [];
    this.loginService.getExportFCLCustomerServiceInfo()
      .subscribe(
        (response) => {
          this.datasource_export_FCL_CS = response;
          // Handle the response data here
          console.log('Response:', this.datasource_export_FCL_CS);
          response.map((x: { action: any; count: any }) => {
            var chart_exportfcl = new Chart_ExportLcl(x.action, [x.count]);
            emptyList1.push(chart_exportfcl);

          })
          this.exportfclarea = emptyList1;    // populate array with json.
          this.showExport_CS_LCL_Chart();         // show the chart.
        },
        (error) => {
          // Handle any errors here
          console.error('Error:', error);
        }
      );
  }

  get_export_Planner_Customer_Info() {

    const emptyList1: Chart_ExportLcl[] = [];
    this.loginService.getExportPlannerCustomerServiceInfo()
      .subscribe(
        (response) => {
          this.datasource_export_Planner_CS = response;
          // Handle the response data here
          console.log('Response:', this.datasource_export_Planner_CS);
          response.map((x: { action: any; count: any }) => {
            var chart_exportPlanner = new Chart_ExportLcl(x.action, [x.count]);
            emptyList1.push(chart_exportPlanner);

          })
          this.exportPlannerarea = emptyList1;    // populate array with json.
          this.showExport_CS_LCL_Chart();         // show the chart.
        },
        (error) => {
          // Handle any errors here
          console.error('Error:', error);
        }
      );
  }

  get_export_Documentation_Customer_Info() {

    const emptyList1: Chart_ExportLcl[] = [];
    this.loginService.getExportDocumentationCustomerServiceInfo()
      .subscribe(
        (response) => {
          this.datasource_export_Documentation_CS = response;
          // Handle the response data here
          console.log('Response:', this.datasource_export_Documentation_CS);
          response.map((x: { action: any; count: any }) => {
            var chart_exportDocumentation = new Chart_ExportLcl(x.action, [x.count]);
            emptyList1.push(chart_exportDocumentation);

          })
          this.exportDocumentationarea = emptyList1;    // populate array with json.
          this.showExport_CS_LCL_Chart();         // show the chart.
        },
        (error) => {
          // Handle any errors here
          console.error('Error:', error);
        }
      );
  }

  showExport_CS_LCL_StackedChart() {
    this.stackedChartData.series = this.exportlclStackedarea;
    this.stackedChartData.xAxis.categories = this.exportlcl_cs_sc_xAxis;       // assign data to the series.
    Highcharts.chart('div-container-stackedchart', this.stackedChartData);    // Update the chart.
  }

  public stackedChartData: any = {
    chart: {
      type: 'column'
    },
    credits: { enabled: false },
    xAxis: {    // the 'x' axis or 'category' axis.
      categories: ['1', '2', '3', '4', '5', '6', '7']
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
      backgroundColor: (Highcharts.theme) || 'white',
      borderColor: '#CCC',
      borderWidth: 1,
      shadow: false,
    },
    plotOptions: {
      series: {
        stacking: 'normal',        
        events : {
          click: this.openLclReport.bind(this)
        }
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
  
  
  openLclReport(event: any){

    let queryParams = {};
    let dialogRef: any;
    
        
    if(event.point.series.name === "outofSLA"){      
      dialogRef = this.dialog.open(ExportLclOutofslaReportComponent, {
        width: '1200px',
        height: '500px',        
        data: {
          action: event.point.category,
          withinsla: 0,
          outofsla: 0
      }
      });
    } else if(event.point.series.name === "withinsla"){
      
      dialogRef = this.dialog.open(ExportLclWithinslaReportComponent, {
        width: '1200px',
        height: '500px',
        
        data: {
          action: event.point.category,
          withinsla: 0          
      }
      });
  } else{
    dialogRef = this.dialog.open(ExportLclReportComponent, {
      width: '1200px',
      height: '500px',      
      data: event.point.category,
    });
  }    

    dialogRef.afterClosed().subscribe((result: any) => {
      // Handle any result or clean-up logic after the modal is closed
      console.log('Modal closed with result:', result);
    });    
  }

  get_export_lcl_Customer_Info_stackedChart() {

    const emptyList1: Chart_ExportLcl[] = [];
    let withinSlaList: string[] = [];
    let outOfSlaList: string[] = [];
    let totalList: string[] = [];

    this.loginService.getExportLCLCustomerServiceInfo()
      .subscribe(
        (response) => {
          this.datasource_export_LCL_CS = response;
          // Handle the response data here


          response.map((y: any) => {
            if (y.count != 1726) {
              withinSlaList.push(y.withinSLA)
              outOfSlaList.push(y.outOfSLA)
              //totalList.push(y.count)
              this.exportlcl_cs_sc_xAxis.push(y.action)
            }
          })
          this.exportlclStackedarea.push({ "name": "withinsla", "data": withinSlaList });
          this.exportlclStackedarea.push({ "name": "outofSLA", "data": outOfSlaList });
          //this.exportlclStackedarea.push({ "name": "total", "data": totalList });
          console.log(JSON.stringify(this.exportlclStackedarea))
          this.showExport_CS_LCL_StackedChart();         // show the chart.
        },
        (error) => {
          // Handle any errors here
          console.error('Error:', error);
        }
      );
  }

  showExport_CS_FCL_StackedChart() {
    this.stackedChartData1.series = this.exportfclStackedarea;
    this.stackedChartData1.xAxis.categories = this.exportfcl_cs_sc_xAxis;       // assign data to the series.
    Highcharts.chart('div-container-stackedchart1', this.stackedChartData1);    // Update the chart.
  }

  public stackedChartData1: any = {
    chart: {
      type: 'column'
    },
    credits: { enabled: false },
    xAxis: {    // the 'x' axis or 'category' axis.
      categories: ['1', '2', '3', '4', '5', '6', '7']
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
      backgroundColor: (Highcharts.theme) || 'white',
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
      text: 'Customer Service (FCL)'
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


  get_export_fcl_Customer_Info_stackedChart() {

    const emptyList1: Chart_ExportLcl[] = [];
    let withinSlaList: string[] = [];
    let outOfSlaList: string[] = [];
    let totalList: string[] = [];

    this.loginService.getExportFCLCustomerServiceInfo()
      .subscribe(
        (response) => {
          this.datasource_export_FCL_CS = response;
          // Handle the response data here


          response.map((y: any) => {
            if (y.count != 1726) {
              withinSlaList.push(y.withinSLA)
              outOfSlaList.push(y.outOfSLA)
              totalList.push(y.count)
              this.exportfcl_cs_sc_xAxis.push(y.action)
            }
          })
          this.exportfclStackedarea.push({ "name": "withinsla", "data": withinSlaList });
          this.exportfclStackedarea.push({ "name": "outofSLA", "data": outOfSlaList });
          this.exportfclStackedarea.push({ "name": "total", "data": totalList });
          console.log(JSON.stringify(this.exportfclStackedarea))
          this.showExport_CS_FCL_StackedChart();         // show the chart.
        },
        (error) => {
          // Handle any errors here
          console.error('Error:', error);
        }
      );
  }

  showExport_CS_Planner_StackedChart() {
    this.stackedChartData2.series = this.exportPlannerStackedarea;
    this.stackedChartData2.xAxis.categories = this.exportPlanner_cs_sc_xAxis;       // assign data to the series.
    Highcharts.chart('div-container-stackedchart2', this.stackedChartData2);    // Update the chart.
  }

  public stackedChartData2: any = {
    chart: {
      type: 'column'
    },
    credits: { enabled: false },
    xAxis: {    // the 'x' axis or 'category' axis.
      categories: ['1', '2', '3', '4', '5', '6', '7']
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
      backgroundColor: (Highcharts.theme) || 'white',
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
      text: 'Planner'
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


  get_export_Planner_Customer_Info_stackedChart() {

    const emptyList1: Chart_ExportLcl[] = [];
    let withinSlaList: string[] = [];
    let outOfSlaList: string[] = [];
    let totalList: string[] = [];

    this.loginService.getExportPlannerCustomerServiceInfo()
      .subscribe(
        (response) => {
          this.datasource_export_Planner_CS = response;
          // Handle the response data here


          response.map((y: any) => {
            if (y.count != 1726) {
              withinSlaList.push(y.withinSLA)
              outOfSlaList.push(y.outOfSLA)
              totalList.push(y.count)
              this.exportPlanner_cs_sc_xAxis.push(y.action)
            }
          })
          this.exportPlannerStackedarea.push({ "name": "withinsla", "data": withinSlaList });
          this.exportPlannerStackedarea.push({ "name": "outofSLA", "data": outOfSlaList });
          this.exportPlannerStackedarea.push({ "name": "total", "data": totalList });
          console.log(JSON.stringify(this.exportPlannerStackedarea))
          this.showExport_CS_Planner_StackedChart();         // show the chart.
        },
        (error) => {
          // Handle any errors here
          console.error('Error:', error);
        }
      );
  }

  showExport_CS_Documentation_StackedChart() {
    this.stackedChartData3.series = this.exportDocumentationStackedarea;
    this.stackedChartData3.xAxis.categories = this.exportDocumentation_cs_sc_xAxis;       // assign data to the series.
    Highcharts.chart('div-container-stackedchart3', this.stackedChartData3);    // Update the chart.
  }

  public stackedChartData3: any = {
    chart: {
      type: 'column'
    },
    credits: { enabled: false },
    xAxis: {    // the 'x' axis or 'category' axis.
      categories: ['1', '2', '3', '4', '5', '6', '7']
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
      backgroundColor: (Highcharts.theme) || 'white',
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
      text: 'Documentation'
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


  get_export_Documentation_Customer_Info_stackedChart() {

    const emptyList1: Chart_ExportLcl[] = [];
    let withinSlaList: string[] = [];
    let outOfSlaList: string[] = [];
    let totalList: string[] = [];

    this.loginService.getExportDocumentationCustomerServiceInfo()
      .subscribe(
        (response) => {
          this.datasource_export_Documentation_CS = response;
          // Handle the response data here


          response.map((y: any) => {
            if (y.count != 1726) {
              withinSlaList.push(y.withinSLA)
              outOfSlaList.push(y.outOfSLA)
              totalList.push(y.count)
              this.exportDocumentation_cs_sc_xAxis.push(y.action)
            }
          })
          this.exportDocumentationStackedarea.push({ "name": "withinsla", "data": withinSlaList });
          this.exportDocumentationStackedarea.push({ "name": "outofSLA", "data": outOfSlaList });
          this.exportDocumentationStackedarea.push({ "name": "total", "data": totalList });
          console.log(JSON.stringify(this.exportDocumentationStackedarea))
          this.showExport_CS_Documentation_StackedChart();         // show the chart.
        },
        (error) => {
          // Handle any errors here
          console.error('Error:', error);
        }
      );
  }


}
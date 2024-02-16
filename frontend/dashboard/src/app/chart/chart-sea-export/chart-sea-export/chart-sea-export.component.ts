import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';
import { LoginService } from 'src/app/service/login.service';
import { Chart_ExportLcl } from 'src/app/model/user-details.model';
import { ExportLclWithinslaReportComponent } from 'src/app/report/sea-export/export-lcl-report/export-lcl-withinsla-report/export-lcl-withinsla-report.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ExportLclOutofslaReportComponent } from 'src/app/report/sea-export/export-lcl-report/export-lcl-outofsla-report/export-lcl-outofsla-report.component';
import { ExportLclReportComponent } from 'src/app/report/sea-export/export-lcl-report/export-lcl-report/export-lcl-report.component';
import { ExportDocumentationOutofslaReportComponent } from 'src/app/report/sea-export/export-documentation-report/export-documentation-outofsla-report/export-documentation-outofsla-report.component';
import { ExportDocumentationWithinslaReportComponent } from 'src/app/report/sea-export/export-documentation-report/export-documentation-withinsla-report/export-documentation-withinsla-report.component';
import { ExportDocumentationCountReportComponent } from 'src/app/report/sea-export/export-documentation-report/export-documentation-count-report/export-documentation-count-report.component';
import { ExportPlannerCountReportComponent } from 'src/app/report/sea-export/export-planner-report/export-planner-count-report/export-planner-count-report.component';
import { ExportPlannerOutofslaReportComponent } from 'src/app/report/sea-export/export-planner-report/export-planner-outofsla-report/export-planner-outofsla-report.component';
import { ExportPlannerWithinslaReportComponent } from 'src/app/report/sea-export/export-planner-report/export-planner-withinsla-report/export-planner-withinsla-report.component';
import { ExportSalesCountReportComponent } from 'src/app/report/sea-export/export-sales-support-report/export-sales-count-report/export-sales-count-report.component';
import { SeaExportBLreleaseDeskOutofslaReportComponent } from 'src/app/report/sea-export/export-blreleaseDesk-report/sea-export-b-lrelease-desk-outofsla-report/sea-export-b-lrelease-desk-outofsla-report.component';
import { SeaExportBLreleaseDeskWithinslaReportComponent } from 'src/app/report/sea-export/export-blreleaseDesk-report/sea-export-b-lrelease-desk-withinsla-report/sea-export-b-lrelease-desk-withinsla-report.component';
import { SeaExportBLreleaseDeskCountReportComponent } from 'src/app/report/sea-export/export-blreleaseDesk-report/sea-export-b-lrelease-desk-count-report/sea-export-b-lrelease-desk-count-report.component';

HighchartsMore(Highcharts);
HighchartsSolidGauge(Highcharts);


@Component({
  selector: 'app-chart-sea-export',
  templateUrl: './chart-sea-export.component.html',
  styleUrls: ['./chart-sea-export.component.scss']
})


export class ChartSeaExportComponent implements OnInit {

  public exportsalesarea: any;
  public exportlclarea: any;
  public exportfclarea: any;
  public exportPlannerarea: any;
  public exportDocumentationarea: any;
  public exportBlreleaseDeskarea: any;
  public exportSalesStackedarea = [{}];
  public exportlclStackedarea = [{}];
  public exportfclStackedarea = [{}];
  public exportPlannerStackedarea = [{}];
  public exportDocumentationStackedarea = [{}];
  public exportBlreleaseDeskStackedarea = [{}];
  datasource_export_Sales_Support_CS = [{}];
  datasource_export_LCL_CS = [{}];
  datasource_export_FCL_CS = [{}];
  datasource_export_Planner_CS = [{}];
  datasource_export_Documentation_CS = [{}];
  datasource_export_BlreleaseDesk_CS = [{}];
  exportSales_cs_sc_xAxis: string[] = [];
  exportlcl_cs_sc_xAxis: string[] = [];
  exportfcl_cs_sc_xAxis: string[] = [];
  exportPlanner_cs_sc_xAxis: string[] = [];
  exportDocumentation_cs_sc_xAxis: string[] = [];
  exportBlreleaseDesk_cs_sc_xAxis: string[] = [];

  numberOfChartsLoaded : number = 0;
  isChartsLoading: boolean = true;
  constructor(private loginService: LoginService, private dialog: MatDialog) { }

  public ngOnInit(): void {
    this.numberOfChartsLoaded = 0
    this.isChartsLoading = true;
    this.get_export_salesSupport_Customer_Info_stackedChart();
    this.get_export_sales_support_Customer_Info();
    this.get_export_lcl_Customer_Info();
    this.get_export_lcl_Customer_Info_stackedChart();
    this.get_export_fcl_Customer_Info();
    this.get_export_fcl_Customer_Info_stackedChart();
    this.get_export_Planner_Customer_Info();
    this.get_export_Planner_Customer_Info_stackedChart();
    this.get_export_Documentation_Customer_Info();
    this.get_export_Documentation_Customer_Info_stackedChart();
    this.get_export_BlreleaseDesk_Customer_Info();
    this.get_export_blreleaseDesk_Customer_Info_stackedChart();

  }

  loadedChartCount(){
    this.numberOfChartsLoaded ++;
    if( this.numberOfChartsLoaded >= 5){
      this.isChartsLoading = false;
    }
  }
  showExport_CS_Sales_Chart() {
    this.export_sales_cs_chartData.series = this.exportsalesarea;       // assign data to the series.
    Highcharts.chart('div-container', this.export_sales_cs_chartData);    // Update the chart.
  }

  showExport_CS_LCL_Chart() {
    this.export_lcl_cs_chartData.series = this.exportlclarea;       // assign data to the series.
    Highcharts.chart('div-container', this.export_lcl_cs_chartData);    // Update the chart.
  }

  showExport_CS_FCL_Chart() {
    this.export_fcl_cs_chartData.series = this.exportfclarea;       // assign data to the series.
    Highcharts.chart('div-container', this.export_fcl_cs_chartData);    // Update the chart.
  }

  showExport_CS_Documentation_Chart() {
    this.export_documentation_cs_chartData.series = this.exportDocumentationarea;       // assign data to the series.
    Highcharts.chart('div-container', this.export_documentation_cs_chartData);    // Update the chart.
  }

  showExport_CS_Planner_Chart() {
    this.export_planner_cs_chartData.series = this.exportPlannerarea;       // assign data to the series.
    Highcharts.chart('div-container', this.export_planner_cs_chartData);    // Update the chart.
  }

  showExport_CS_BlreleaseDesk_Chart() {
    this.export_blreleaseDesk_cs_chartData.series = this.exportBlreleaseDeskarea;       // assign data to the series.
    Highcharts.chart('div-container', this.export_blreleaseDesk_cs_chartData);    // Update the chart.
  }

  public export_sales_cs_chartData: any = {
    chart: {
      type: 'column'
    },
    credits: { enabled: false },
    xAxis: {    // the 'x' axis or 'category' axis.
      categories: ['jan', 'feb', 'mar']
    },

    title: {
      text: 'Sales support'
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

  public export_fcl_cs_chartData: any = {
    chart: {
      type: 'column'
    },
    credits: { enabled: false },
    xAxis: {    // the 'x' axis or 'category' axis.
      categories: ['jan', 'feb', 'mar']
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

  public export_documentation_cs_chartData: any = {
    chart: {
      type: 'column'
    },
    credits: { enabled: false },
    xAxis: {    // the 'x' axis or 'category' axis.
      categories: ['jan', 'feb', 'mar']
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

  public export_planner_cs_chartData: any = {
    chart: {
      type: 'column'
    },
    credits: { enabled: false },
    xAxis: {    // the 'x' axis or 'category' axis.
      categories: ['jan', 'feb', 'mar']
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

  public export_blreleaseDesk_cs_chartData: any = {
    chart: {
      type: 'column'
    },
    credits: { enabled: false },
    xAxis: {    // the 'x' axis or 'category' axis.
      categories: ['jan', 'feb', 'mar']
    },

    title: {
      text: 'B/L release Desk'
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

  get_export_sales_support_Customer_Info() {

    const emptyList1: Chart_ExportLcl[] = [];
    this.loginService.getExportSalesSupportCustomerServiceInfo()
      .subscribe(
        (response) => {
          this.datasource_export_Sales_Support_CS = response;
          // Handle the response data here
          console.log('Response:', this.datasource_export_Sales_Support_CS);
          response.map((x: { action: any; count: any }) => {
            var chart_exportsales = new Chart_ExportLcl(x.action, [x.count]);
            emptyList1.push(chart_exportsales);

          })
          this.exportsalesarea = emptyList1;    // populate array with json.
          this.showExport_CS_Sales_Chart();         // show the chart.
        },
        (error) => {
          // Handle any errors here
          console.error('Error:', error);
        }
      );
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
          this.showExport_CS_FCL_Chart();         // show the chart.
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
          this.showExport_CS_Planner_Chart();         // show the chart.
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
          this.showExport_CS_Documentation_Chart();         // show the chart.
        },
        (error) => {
          // Handle any errors here
          console.error('Error:', error);
        }
      );
  }

  get_export_BlreleaseDesk_Customer_Info() {

    const emptyList1: Chart_ExportLcl[] = [];
    this.loginService.getExportBLreleaseDeskCustomerServiceInfo()
      .subscribe(
        (response) => {
          this.datasource_export_BlreleaseDesk_CS = response;
          // Handle the response data here
          console.log('Response:', this.datasource_export_BlreleaseDesk_CS);
          response.map((x: { action: any; count: any }) => {
            var chart_exportBlreleaseDesk = new Chart_ExportLcl(x.action, [x.count]);
            emptyList1.push(chart_exportBlreleaseDesk);

          })
          this.exportBlreleaseDeskarea = emptyList1;    // populate array with json.
          this.showExport_CS_BlreleaseDesk_Chart();         // show the chart.
        },
        (error) => {
          // Handle any errors here
          console.error('Error:', error);
        }
      );
  }

  showExport_CS_SalesSupport_StackedChart() {
    this.stackedChartData5.series = this.exportSalesStackedarea;
    this.stackedChartData5.xAxis.categories = this.exportSales_cs_sc_xAxis;       // assign data to the series.
    Highcharts.chart('div-container-stackedchart-sales', this.stackedChartData5);    // Update the chart.
  }

  public stackedChartData5: any = {
    chart: {
      type: 'column',
      events: {
        load: () => {
          this.loadedChartCount();
        }
      }
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
        events: {
          click: this.openSalesReport.bind(this)
        }
      }
    },
    title: {
      text: 'Sales Support'
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

  showExport_CS_LCL_StackedChart() {
    this.stackedChartData.series = this.exportlclStackedarea;
    this.stackedChartData.xAxis.categories = this.exportlcl_cs_sc_xAxis;       // assign data to the series.
    Highcharts.chart('div-container-stackedchart', this.stackedChartData);    // Update the chart.
  }

  public stackedChartData: any = {
    chart: {
      type: 'column',
      events: {
        load: () => {
          this.loadedChartCount();
        }
      }
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
        events: {
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

  openSalesReport(event: any) {

    let queryParams = {};
    let dialogRef: any;


    if (event.point.series.name === "count") {
      dialogRef = this.dialog.open(ExportSalesCountReportComponent, {
        width: '1200px',
        height: '500px',
        data: {
          action: event.point.category,
          withinsla: 0,
          outofsla: 0
        }
      });
    } else {
      dialogRef = this.dialog.open(ExportSalesCountReportComponent, {
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


  openLclReport(event: any) {

    let queryParams = {};
    let dialogRef: any;


    if (event.point.series.name === "outofSLA") {
      dialogRef = this.dialog.open(ExportLclOutofslaReportComponent, {
        width: '1200px',
        height: '500px',
        data: {
          action: event.point.category,
          withinsla: 0,
          outofsla: 0
        }
      });
    } else if (event.point.series.name === "withinsla") {

      dialogRef = this.dialog.open(ExportLclWithinslaReportComponent, {
        width: '1200px',
        height: '500px',

        data: {
          action: event.point.category,
          withinsla: 0
        }
      });
    } else {
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

  openDocumentationReport(event: any) {

    let queryParams = {};
    let dialogRef: any;


    if (event.point.series.name === "outofSLA") {
      dialogRef = this.dialog.open(ExportDocumentationOutofslaReportComponent, {
        width: '1200px',
        height: '500px',
        data: {
          action: event.point.category,
          withinsla: 0,
          outofsla: 0
        }
      });
    } else if (event.point.series.name === "withinsla") {

      dialogRef = this.dialog.open(ExportDocumentationWithinslaReportComponent, {
        width: '1200px',
        height: '500px',

        data: {
          action: event.point.category,
          withinsla: 0
        }
      });
    } else {
      dialogRef = this.dialog.open(ExportDocumentationCountReportComponent, {
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

  openPlannerReport(event: any) {

    let queryParams = {};
    let dialogRef: any;


    if (event.point.series.name === "outofSLA") {
      dialogRef = this.dialog.open(ExportPlannerOutofslaReportComponent, {
        width: '1200px',
        height: '500px',
        data: {
          action: event.point.category,
          withinsla: 0,
          outofsla: 0
        }
      });
    } else if (event.point.series.name === "withinsla") {

      dialogRef = this.dialog.open(ExportPlannerWithinslaReportComponent, {
        width: '1200px',
        height: '500px',

        data: {
          action: event.point.category,
          withinsla: 0
        }
      });
    } else {
      dialogRef = this.dialog.open(ExportPlannerCountReportComponent, {
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

  openBlreleaseDeskReport(event: any) {

    let queryParams = {};
    let dialogRef: any;


    if (event.point.series.name === "outofSLA") {
      dialogRef = this.dialog.open(SeaExportBLreleaseDeskOutofslaReportComponent, {
        width: '1200px',
        height: '500px',
        data: {
          action: event.point.category,
          withinsla: 0,
          outofsla: 0
        }
      });
    } else if (event.point.series.name === "withinsla") {

      dialogRef = this.dialog.open(SeaExportBLreleaseDeskWithinslaReportComponent, {
        width: '1200px',
        height: '500px',

        data: {
          action: event.point.category,
          withinsla: 0
        }
      });
    } else {
      dialogRef = this.dialog.open(SeaExportBLreleaseDeskCountReportComponent, {
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

  get_export_salesSupport_Customer_Info_stackedChart() {

    const emptyList1: Chart_ExportLcl[] = [];
    let withinSlaList: string[] = [];
    let outOfSlaList: string[] = [];
    let totalList: string[] = [];

    this.loginService.getExportSalesSupportCustomerServiceInfo()
      .subscribe(
        (response) => {
          this.datasource_export_Sales_Support_CS = response;
          // Handle the response data here


          response.map((y: any) => {
            if (y.count != 1726) {
              withinSlaList.push(y.withinSLA)
              outOfSlaList.push(y.outOfSLA)
              //totalList.push(y.count)
              this.exportlcl_cs_sc_xAxis.push(y.action)
            }
          })
          this.exportSalesStackedarea.push({ "name": "withinsla", "data": withinSlaList });
          this.exportSalesStackedarea.push({ "name": "outofSLA", "data": outOfSlaList });
          //this.exportlclStackedarea.push({ "name": "total", "data": totalList });
          console.log(JSON.stringify(this.exportSalesStackedarea))
          this.showExport_CS_SalesSupport_StackedChart();         // show the chart.
        },
        (error) => {
          // Handle any errors here
          console.error('Error:', error);
        }
      );
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
      type: 'column',
      events: {
        load: () => {
          this.loadedChartCount();
        }
      }
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
      type: 'column',
      events: {
        load: () => {
          this.loadedChartCount();
        }
      }
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
        events: {
          click: this.openPlannerReport.bind(this)
        }
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
      type: 'column',
      events: {
        load: () => {
          this.loadedChartCount();
        }
      }
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
        events: {
          click: this.openDocumentationReport.bind(this)
        }
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

  showExport_CS_BlreleaseDesk_StackedChart() {
    this.stackedChartData4.series = this.exportBlreleaseDeskStackedarea;
    this.stackedChartData4.xAxis.categories = this.exportBlreleaseDesk_cs_sc_xAxis;       // assign data to the series.
    Highcharts.chart('div-container-stackedchart4', this.stackedChartData4);    // Update the chart.
  }

  public stackedChartData4: any = {
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
        events: {
          click: this.openDocumentationReport.bind(this)
        }
      }
    },
    title: {
      text: 'B/L release desk'
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


  get_export_blreleaseDesk_Customer_Info_stackedChart() {

    const emptyList1: Chart_ExportLcl[] = [];
    let withinSlaList: string[] = [];
    let outOfSlaList: string[] = [];
    let totalList: string[] = [];

    this.loginService.getExportBLreleaseDeskCustomerServiceInfo()
      .subscribe(
        (response) => {
          this.datasource_export_BlreleaseDesk_CS = response;
          // Handle the response data here


          response.map((y: any) => {
            if (y.count != 1726) {
              withinSlaList.push(y.withinSLA)
              outOfSlaList.push(y.outOfSLA)
              totalList.push(y.count)
              this.exportBlreleaseDesk_cs_sc_xAxis.push(y.action)
            }
          })
          this.exportBlreleaseDeskStackedarea.push({ "name": "withinsla", "data": withinSlaList });
          this.exportBlreleaseDeskStackedarea.push({ "name": "outofSLA", "data": outOfSlaList });
          this.exportBlreleaseDeskStackedarea.push({ "name": "total", "data": totalList });
          console.log(JSON.stringify(this.exportBlreleaseDeskStackedarea))
          this.showExport_CS_BlreleaseDesk_StackedChart();         // show the chart.
        },
        (error) => {
          // Handle any errors here
          console.error('Error:', error);
        }
      );
  }


}

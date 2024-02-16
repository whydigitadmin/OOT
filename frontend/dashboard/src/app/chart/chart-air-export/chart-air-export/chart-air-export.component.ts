import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';
import { LoginService } from 'src/app/service/login.service';
import { Chart_AirExportLcl, Chart_ExportLcl } from 'src/app/model/user-details.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AirExportSalesCountReportComponent } from 'src/app/report/air-export/export-sales-report/air-export-sales-count-report/air-export-sales-count-report.component';
import { AirExportCustomerOutofslaReportComponent } from 'src/app/report/air-export/export-customer-report/air-export-customer-outofsla-report/air-export-customer-outofsla-report.component';
import { AirExportCustomerWithinslaReportComponent } from 'src/app/report/air-export/export-customer-report/air-export-customer-withinsla-report/air-export-customer-withinsla-report.component';
import { AirExportCustomerCountReportComponent } from 'src/app/report/air-export/export-customer-report/air-export-customer-count-report/air-export-customer-count-report.component';
import { AirExportDocumentationOutofslaReportComponent } from 'src/app/report/air-export/export-air-documentation-report/air-export-documentation-outofsla-report/air-export-documentation-outofsla-report.component';
import { AirExportDocumentationWithinslaReportComponent } from 'src/app/report/air-export/export-air-documentation-report/air-export-documentation-withinsla-report/air-export-documentation-withinsla-report.component';
import { AirExportDocumentationCountReportComponent } from 'src/app/report/air-export/export-air-documentation-report/air-export-documentation-count-report/air-export-documentation-count-report.component';
import { AirExportPlannerOutofslaReportComponent } from 'src/app/report/air-export/export-air-planner-report/air-export-planner-outofsla-report/air-export-planner-outofsla-report.component';
import { AirExportPlannerWithinslaReportComponent } from 'src/app/report/air-export/export-air-planner-report/air-export-planner-withinsla-report/air-export-planner-withinsla-report.component';
import { AirExportPlannerCountReportComponent } from 'src/app/report/air-export/export-air-planner-report/air-export-planner-count-report/air-export-planner-count-report.component';
import { AirExportBlreleaseDeskOutofslaReportComponent } from 'src/app/report/air-export/export-air-blreleaseDesk-report/air-export-blrelease-desk-outofsla-report/air-export-blrelease-desk-outofsla-report.component';
import { AirExportBlreleaseDeskWithinslaReportComponent } from 'src/app/report/air-export/export-air-blreleaseDesk-report/air-export-blrelease-desk-withinsla-report/air-export-blrelease-desk-withinsla-report.component';
import { AirExportBlreleaseDeskCountReportComponent } from 'src/app/report/air-export/export-air-blreleaseDesk-report/air-export-blrelease-desk-count-report/air-export-blrelease-desk-count-report.component';

HighchartsMore(Highcharts);
HighchartsSolidGauge(Highcharts);

@Component({
  selector: 'app-chart-air-export',
  templateUrl: './chart-air-export.component.html',
  styleUrls: ['./chart-air-export.component.scss']
})

export class ChartAirExportComponent implements OnInit {

  public airexportsalesarea: any;
  public airexportcustomerServicearea: any;
  public airexportDocumentationarea: any;
  public airexportPlannerarea: any;
  public airexportBlreleaseDeskarea: any;
  public airexportSalesStackedarea = [{}];
  public airexportcustomerServiceStackedarea = [{}];
  public airexportDocumentationStackedarea = [{}];
  public airexportPlannerStackedarea = [{}];
  public airexportBlreleaseDeskStackedarea = [{}];
  datasource_airexport_Sales_Support_CS = [{}];
  datasource_airexport_customerService_CS = [{}];
  datasource_airexport_Documentation_CS = [{}];
  datasource_airexport_Planner_CS = [{}];
  datasource_airexport_BlreleaseDesk_CS = [{}];
  airexportSales_cs_sc_xAxis: string[] = [];
  airexportcustomerService_cs_sc_xAxis: string[] = [];
  airexportDocumentation_cs_sc_xAxis: string[] = [];
  airexportPlanner_cs_sc_xAxis: string[] = [];
  airexportBlreleaseDesk_cs_sc_xAxis: string[] = [];

  constructor(private loginService: LoginService, private dialog: MatDialog) { }

  public ngOnInit(): void {

    this.get_airexport_salesSupport_Customer_Info_stackedChart();
    this.get_airexport_sales_support_Customer_Info();
    this.get_airexport_customerService_Customer_Info_stackedChart();
    this.get_airexport_CustomerService_Customer_Info();
    this.get_airexport_Documentation_Customer_Info_stackedChart();
    this.get_airexport_Documentation_Customer_Info();
    this.get_airexport_Planner_Customer_Info_stackedChart();
    this.get_airexport_Planner_Customer_Info();
    this.get_airexport_blreleaseDesk_Customer_Info_stackedChart();
    this.get_airexport_BlreleaseDesk_Customer_Info();
  }

  showAirExport_CS_Sales_Chart() {
    this.airexport_sales_cs_chartData.series = this.airexportsalesarea;       // assign data to the series.
    Highcharts.chart('div-container', this.airexport_sales_cs_chartData);    // Update the chart.
  }

  showAirExport_CS_CustomerService_Chart() {
    this.export_customerService_cs_chartData.series = this.airexportcustomerServicearea;       // assign data to the series.
    Highcharts.chart('div-container', this.export_customerService_cs_chartData);    // Update the chart.
  }

  showAirExport_CS_Documentation_Chart() {
    this.airexport_documentation_cs_chartData.series = this.airexportDocumentationarea;       // assign data to the series.
    Highcharts.chart('div-container', this.airexport_documentation_cs_chartData);    // Update the chart.
  }

  showAirExport_CS_Planner_Chart() {
    this.airexport_planner_cs_chartData.series = this.airexportPlannerarea;       // assign data to the series.
    Highcharts.chart('div-container', this.airexport_planner_cs_chartData);    // Update the chart.
  }

  showAirExport_CS_BlreleaseDesk_Chart() {
    this.airexport_blreleaseDesk_cs_chartData.series = this.airexportBlreleaseDeskarea;       // assign data to the series.
    Highcharts.chart('div-container', this.airexport_blreleaseDesk_cs_chartData);    // Update the chart.
  }

  public airexport_sales_cs_chartData: any = {
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

  public export_customerService_cs_chartData: any = {
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

  public airexport_documentation_cs_chartData: any = {
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

  public airexport_planner_cs_chartData: any = {
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

  public airexport_blreleaseDesk_cs_chartData: any = {
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

  get_airexport_sales_support_Customer_Info() {

    const emptyList1: Chart_AirExportLcl[] = [];
    this.loginService.getAirExportSalesCustomerServiceInfo()
      .subscribe(
        (response) => {
          this.datasource_airexport_Sales_Support_CS = response;
          // Handle the response data here
          console.log('Response:', this.datasource_airexport_Sales_Support_CS);
          response.map((x: { action: any; count: any }) => {
            var chart_airexportsales = new Chart_AirExportLcl(x.action, [x.count]);
            emptyList1.push(chart_airexportsales);

          })
          this.airexportsalesarea = emptyList1;    // populate array with json.
          this.showAirExport_CS_Sales_Chart();         // show the chart.
        },
        (error) => {
          // Handle any errors here
          console.error('Error:', error);
        }
      );
  }


  get_airexport_CustomerService_Customer_Info() {

    const emptyList1: Chart_AirExportLcl[] = [];
    this.loginService.getAirExportCsCustomerServiceInfo()
      .subscribe(
        (response) => {
          this.datasource_airexport_customerService_CS = response;
          // Handle the response data here
          console.log('Response:', this.datasource_airexport_customerService_CS);
          response.map((x: { action: any; count: any }) => {
            var chart_airexportcustomerService = new Chart_AirExportLcl(x.action, [x.count]);
            emptyList1.push(chart_airexportcustomerService);

          })
          this.airexportcustomerServicearea = emptyList1;    // populate array with json.
          this.showAirExport_CS_CustomerService_Chart();         // show the chart.
        },
        (error) => {
          // Handle any errors here
          console.error('Error:', error);
        }
      );
  }

  get_airexport_Documentation_Customer_Info() {

    const emptyList1: Chart_AirExportLcl[] = [];
    this.loginService.getAirExportDocumentationCustomerServiceInfo()
      .subscribe(
        (response) => {
          this.datasource_airexport_Documentation_CS = response;
          // Handle the response data here
          console.log('Response:', this.datasource_airexport_Documentation_CS);
          response.map((x: { action: any; count: any }) => {
            var chart_airexportDocumentation = new Chart_AirExportLcl(x.action, [x.count]);
            emptyList1.push(chart_airexportDocumentation);

          })
          this.airexportDocumentationarea = emptyList1;    // populate array with json.
          this.showAirExport_CS_Documentation_Chart();         // show the chart.
        },
        (error) => {
          // Handle any errors here
          console.error('Error:', error);
        }
      );
  }

  get_airexport_Planner_Customer_Info() {

    const emptyList1: Chart_AirExportLcl[] = [];
    this.loginService.getAirExportPlannerCustomerServiceInfo()
      .subscribe(
        (response) => {
          this.datasource_airexport_Planner_CS = response;
          // Handle the response data here
          console.log('Response:', this.datasource_airexport_Planner_CS);
          response.map((x: { action: any; count: any }) => {
            var chart_airexportPlanner = new Chart_AirExportLcl(x.action, [x.count]);
            emptyList1.push(chart_airexportPlanner);

          })
          this.airexportPlannerarea = emptyList1;    // populate array with json.
          this.showAirExport_CS_Planner_Chart();         // show the chart.
        },
        (error) => {
          // Handle any errors here
          console.error('Error:', error);
        }
      );
  }

  get_airexport_BlreleaseDesk_Customer_Info() {

    const emptyList1: Chart_AirExportLcl[] = [];
    this.loginService.getAirExportBlreleaseDeskCustomerServiceInfo()
      .subscribe(
        (response) => {
          this.datasource_airexport_BlreleaseDesk_CS = response;
          // Handle the response data here
          console.log('Response:', this.datasource_airexport_BlreleaseDesk_CS);
          response.map((x: { action: any; count: any }) => {
            var chart_airexportBlreleaseDesk = new Chart_AirExportLcl(x.action, [x.count]);
            emptyList1.push(chart_airexportBlreleaseDesk);

          })
          this.airexportBlreleaseDeskarea = emptyList1;    // populate array with json.
          this.showAirExport_CS_BlreleaseDesk_Chart();         // show the chart.
        },
        (error) => {
          // Handle any errors here
          console.error('Error:', error);
        }
      );
  }

  showAirExport_CS_SalesSupport_StackedChart() {
    this.stackedChartData5.series = this.airexportSalesStackedarea;
    this.stackedChartData5.xAxis.categories = this.airexportSales_cs_sc_xAxis;       // assign data to the series.
    Highcharts.chart('div-container-stackedchart-air-sales', this.stackedChartData5);    // Update the chart.
  }

  public stackedChartData5: any = {
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

  showAirExport_CS_CustomerService_StackedChart() {
    this.stackedChartData.series = this.airexportcustomerServiceStackedarea;
    this.stackedChartData.xAxis.categories = this.airexportcustomerService_cs_sc_xAxis;       // assign data to the series.
    Highcharts.chart('div-container-stackedchart-air-cs', this.stackedChartData);    // Update the chart.
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
        events: {
          click: this.openCustomerServiceReport.bind(this)
        }
      }
    },
    title: {
      text: 'Customer Service'
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
      dialogRef = this.dialog.open(AirExportSalesCountReportComponent, {
        width: '1200px',
        height: '500px',
        data: {
          action: event.point.category,
          withinsla: 0,
          outofsla: 0
        }
      });
    } else {
      dialogRef = this.dialog.open(AirExportSalesCountReportComponent, {
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


  openCustomerServiceReport(event: any) {

    let queryParams = {};
    let dialogRef: any;


    if (event.point.series.name === "outofSLA") {
      dialogRef = this.dialog.open(AirExportCustomerOutofslaReportComponent, {
        width: '1200px',
        height: '500px',
        data: {
          action: event.point.category,
          withinsla: 0,
          outofsla: 0
        }
      });
    } else if (event.point.series.name === "withinsla") {

      dialogRef = this.dialog.open(AirExportCustomerWithinslaReportComponent, {
        width: '1200px',
        height: '500px',

        data: {
          action: event.point.category,
          withinsla: 0
        }
      });
    } else {
      dialogRef = this.dialog.open(AirExportCustomerCountReportComponent, {
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
      dialogRef = this.dialog.open(AirExportDocumentationOutofslaReportComponent, {
        width: '1200px',
        height: '500px',
        data: {
          action: event.point.category,
          withinsla: 0,
          outofsla: 0
        }
      });
    } else if (event.point.series.name === "withinsla") {

      dialogRef = this.dialog.open(AirExportDocumentationWithinslaReportComponent, {
        width: '1200px',
        height: '500px',

        data: {
          action: event.point.category,
          withinsla: 0
        }
      });
    } else {
      dialogRef = this.dialog.open(AirExportDocumentationCountReportComponent, {
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
      dialogRef = this.dialog.open(AirExportPlannerOutofslaReportComponent, {
        width: '1200px',
        height: '500px',
        data: {
          action: event.point.category,
          withinsla: 0,
          outofsla: 0
        }
      });
    } else if (event.point.series.name === "withinsla") {

      dialogRef = this.dialog.open(AirExportPlannerWithinslaReportComponent, {
        width: '1200px',
        height: '500px',

        data: {
          action: event.point.category,
          withinsla: 0
        }
      });
    } else {
      dialogRef = this.dialog.open(AirExportPlannerCountReportComponent, {
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
      dialogRef = this.dialog.open(AirExportBlreleaseDeskOutofslaReportComponent, {
        width: '1200px',
        height: '500px',
        data: {
          action: event.point.category,
          withinsla: 0,
          outofsla: 0
        }
      });
    } else if (event.point.series.name === "withinsla") {

      dialogRef = this.dialog.open(AirExportBlreleaseDeskWithinslaReportComponent, {
        width: '1200px',
        height: '500px',

        data: {
          action: event.point.category,
          withinsla: 0
        }
      });
    } else {
      dialogRef = this.dialog.open(AirExportBlreleaseDeskCountReportComponent, {
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

  get_airexport_salesSupport_Customer_Info_stackedChart() {

    const emptyList1: Chart_ExportLcl[] = [];
    let withinSlaList: string[] = [];
    let outOfSlaList: string[] = [];
    let totalList: string[] = [];

    this.loginService.getAirExportSalesCustomerServiceInfo()
      .subscribe(
        (response) => {
          this.datasource_airexport_Sales_Support_CS = response;
          // Handle the response data here


          response.map((y: any) => {
            if (y.count != 1726) {
              withinSlaList.push(y.withinSLA)
              outOfSlaList.push(y.outOfSLA)
              //totalList.push(y.count)
              this.airexportSales_cs_sc_xAxis.push(y.action)
            }
          })
          this.airexportSalesStackedarea.push({ "name": "withinsla", "data": withinSlaList });
          this.airexportSalesStackedarea.push({ "name": "outofSLA", "data": outOfSlaList });
          //this.exportlclStackedarea.push({ "name": "total", "data": totalList });
          console.log(JSON.stringify(this.airexportSalesStackedarea))
          this.showAirExport_CS_SalesSupport_StackedChart();         // show the chart.
        },
        (error) => {
          // Handle any errors here
          console.error('Error:', error);
        }
      );
  }

  get_airexport_customerService_Customer_Info_stackedChart() {

    const emptyList1: Chart_ExportLcl[] = [];
    let withinSlaList: string[] = [];
    let outOfSlaList: string[] = [];
    let totalList: string[] = [];

    this.loginService.getAirExportCsCustomerServiceInfo()
      .subscribe(
        (response) => {
          this.datasource_airexport_customerService_CS = response;
          // Handle the response data here


          response.map((y: any) => {
            if (y.count != 1726) {
              withinSlaList.push(y.withinSLA)
              outOfSlaList.push(y.outOfSLA)
              //totalList.push(y.count)
              this.airexportcustomerService_cs_sc_xAxis.push(y.action)
            }
          })
          this.airexportcustomerServiceStackedarea.push({ "name": "withinsla", "data": withinSlaList });
          this.airexportcustomerServiceStackedarea.push({ "name": "outofSLA", "data": outOfSlaList });
          //this.exportlclStackedarea.push({ "name": "total", "data": totalList });
          console.log(JSON.stringify(this.airexportcustomerServiceStackedarea))
          this.showAirExport_CS_CustomerService_StackedChart();         // show the chart.
        },
        (error) => {
          // Handle any errors here
          console.error('Error:', error);
        }
      );
  }

  showAirExport_CS_Documentation_StackedChart() {
    this.stackedChartData3.series = this.airexportDocumentationStackedarea;
    this.stackedChartData3.xAxis.categories = this.airexportDocumentation_cs_sc_xAxis;       // assign data to the series.
    Highcharts.chart('div-container-stackedchart-air-documentation', this.stackedChartData3);    // Update the chart.
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


  get_airexport_Documentation_Customer_Info_stackedChart() {

    const emptyList1: Chart_AirExportLcl[] = [];
    let withinSlaList: string[] = [];
    let outOfSlaList: string[] = [];
    let totalList: string[] = [];

    this.loginService.getAirExportDocumentationCustomerServiceInfo()
      .subscribe(
        (response) => {
          this.datasource_airexport_Documentation_CS = response;
          // Handle the response data here


          response.map((y: any) => {
            if (y.count != 1726) {
              withinSlaList.push(y.withinSLA)
              outOfSlaList.push(y.outOfSLA)
              totalList.push(y.count)
              this.airexportDocumentation_cs_sc_xAxis.push(y.action)
            }
          })
          this.airexportDocumentationStackedarea.push({ "name": "withinsla", "data": withinSlaList });
          this.airexportDocumentationStackedarea.push({ "name": "outofSLA", "data": outOfSlaList });
          this.airexportDocumentationStackedarea.push({ "name": "total", "data": totalList });
          console.log(JSON.stringify(this.airexportDocumentationStackedarea))
          this.showAirExport_CS_Documentation_StackedChart();         // show the chart.
        },
        (error) => {
          // Handle any errors here
          console.error('Error:', error);
        }
      );
  }

  showAirExport_CS_Planner_StackedChart() {
    this.stackedChartData2.series = this.airexportPlannerStackedarea;
    this.stackedChartData2.xAxis.categories = this.airexportPlanner_cs_sc_xAxis;       // assign data to the series.
    Highcharts.chart('div-container-stackedchart-air-planner', this.stackedChartData2);    // Update the chart.
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


  get_airexport_Planner_Customer_Info_stackedChart() {

    const emptyList1: Chart_AirExportLcl[] = [];
    let withinSlaList: string[] = [];
    let outOfSlaList: string[] = [];
    let totalList: string[] = [];

    this.loginService.getAirExportPlannerCustomerServiceInfo()
      .subscribe(
        (response) => {
          this.datasource_airexport_Planner_CS = response;
          // Handle the response data here


          response.map((y: any) => {
            if (y.count != 1726) {
              withinSlaList.push(y.withinSLA)
              outOfSlaList.push(y.outOfSLA)
              totalList.push(y.count)
              this.airexportPlanner_cs_sc_xAxis.push(y.action)
            }
          })
          this.airexportPlannerStackedarea.push({ "name": "withinsla", "data": withinSlaList });
          this.airexportPlannerStackedarea.push({ "name": "outofSLA", "data": outOfSlaList });
          this.airexportPlannerStackedarea.push({ "name": "total", "data": totalList });
          console.log(JSON.stringify(this.airexportPlannerStackedarea))
          this.showAirExport_CS_Planner_StackedChart();         // show the chart.
        },
        (error) => {
          // Handle any errors here
          console.error('Error:', error);
        }
      );
  }

  showAirExport_CS_BlreleaseDesk_StackedChart() {
    this.stackedChartData4.series = this.airexportBlreleaseDeskStackedarea;
    this.stackedChartData4.xAxis.categories = this.airexportBlreleaseDesk_cs_sc_xAxis;       // assign data to the series.
    Highcharts.chart('div-container-stackedchart-air-bl', this.stackedChartData4);    // Update the chart.
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


  get_airexport_blreleaseDesk_Customer_Info_stackedChart() {

    const emptyList1: Chart_AirExportLcl[] = [];
    let withinSlaList: string[] = [];
    let outOfSlaList: string[] = [];
    let totalList: string[] = [];

    this.loginService.getAirExportBlreleaseDeskCustomerServiceInfo()
      .subscribe(
        (response) => {
          this.datasource_airexport_BlreleaseDesk_CS = response;
          // Handle the response data here


          response.map((y: any) => {
            if (y.count != 1726) {
              withinSlaList.push(y.withinSLA)
              outOfSlaList.push(y.outOfSLA)
              totalList.push(y.count)
              this.airexportBlreleaseDesk_cs_sc_xAxis.push(y.action)
            }
          })
          this.airexportBlreleaseDeskStackedarea.push({ "name": "withinsla", "data": withinSlaList });
          this.airexportBlreleaseDeskStackedarea.push({ "name": "outofSLA", "data": outOfSlaList });
          this.airexportBlreleaseDeskStackedarea.push({ "name": "total", "data": totalList });
          console.log(JSON.stringify(this.airexportBlreleaseDeskStackedarea))
          this.showAirExport_CS_BlreleaseDesk_StackedChart();         // show the chart.
        },
        (error) => {
          // Handle any errors here
          console.error('Error:', error);
        }
      );
  }


}


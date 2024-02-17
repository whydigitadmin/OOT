import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';
import { LoginService } from 'src/app/service/login.service';
import { ChartData, Chart_ImportLcl } from 'src/app/model/user-details.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ImportSalesCountReportComponent } from 'src/app/report/sea-import/import-sales-support-report/import-sales-count-report/import-sales-count-report.component';
import { ImportLclOutofslaReportComponent } from 'src/app/report/sea-import/import-lcl-report/import-lcl-outofsla-report/import-lcl-outofsla-report.component';
import { ImportLclWithinslaReportComponent } from 'src/app/report/sea-import/import-lcl-report/import-lcl-withinsla-report/import-lcl-withinsla-report.component';
import { ImportLclCountReportComponent } from 'src/app/report/sea-import/import-lcl-report/import-lcl-count-report/import-lcl-count-report.component';
import { ImportDocumentationOutofslaReportComponent } from 'src/app/report/sea-import/import-documentation-report/import-documentation-outofsla-report/import-documentation-outofsla-report.component';
import { ImportDocumentationWithinslaReportComponent } from 'src/app/report/sea-import/import-documentation-report/import-documentation-withinsla-report/import-documentation-withinsla-report.component';
import { ImportDocumentationCountReportComponent } from 'src/app/report/sea-import/import-documentation-report/import-documentation-count-report/import-documentation-count-report.component';
import { ImportTranshipmentDeskOutofslaReportComponent } from 'src/app/report/sea-import/import-transhipmentDesk-report/import-transhipment-desk-outofsla-report/import-transhipment-desk-outofsla-report.component';
import { ImportTranshipmentDeskWithinslaReportComponent } from 'src/app/report/sea-import/import-transhipmentDesk-report/import-transhipment-desk-withinsla-report/import-transhipment-desk-withinsla-report.component';
import { ImportTranshipmentDeskCountReportComponent } from 'src/app/report/sea-import/import-transhipmentDesk-report/import-transhipment-desk-count-report/import-transhipment-desk-count-report.component';

HighchartsMore(Highcharts);
HighchartsSolidGauge(Highcharts);

@Component({
  selector: 'app-chart-sea-import',
  templateUrl: './chart-sea-import.component.html',
  styleUrls: ['./chart-sea-import.component.scss']
})

export class ChartSeaImportComponent implements OnInit {

  public importsalesarea: any;
  public importlclarea: any;
  public importfclarea: any;
  public importDocumentationarea: any;
  public importTranshipmentDeskarea: any;
  public importSalesStackedarea = [{}];
  public importlclStackedarea = [{}];
  public importfclStackedarea = [{}];
  public importDocumentationStackedarea = [{}];
  public importTranshipmentDeskStackedarea = [{}];
  datasource_import_Sales_Support_CS = [{}];
  datasource_import_LCL_CS = [{}];
  datasource_import_FCL_CS = [{}];
  datasource_import_Documentation_CS = [{}];
  datasource_import_TranshipmentDesk_CS = [{}];
  importSales_cs_sc_xAxis: string[] = [];
  importlcl_cs_sc_xAxis: string[] = [];
  importfcl_cs_sc_xAxis: string[] = [];
  importDocumentation_cs_sc_xAxis: string[] = [];
  importTranshipmentDesk_cs_sc_xAxis: string[] = [];

  numberOfChartsLoaded: number = 0;
  isChartsLoading: boolean = true;
  constructor(private loginService: LoginService, private dialog: MatDialog) { }

  public ngOnInit(): void {
    this.numberOfChartsLoaded = 0
    this.isChartsLoading = true;
    this.get_import_sales_support_Customer_Info();
    this.get_import_lcl_Customer_Info_stackedChart();
    this.get_import_lcl_Customer_Info();
    this.get_import_fcl_Customer_Info();
    this.get_import_fcl_Customer_Info_stackedChart();
    this.get_import_Documentation_Customer_Info_stackedChart();
    this.get_import_Documentation_Customer_Info();
    this.get_import_transhipmentDesk_Customer_Info_stackedChart();
    this.get_import_TranshipmentDesk_Customer_Info();
    this.isChartsLoading = false;
  }

  loadedChartCount() {
    this.numberOfChartsLoaded++;
    console.log("mani", this.numberOfChartsLoaded)
    if (this.numberOfChartsLoaded >= 1) {
      this.isChartsLoading = false;
    }
  }

  showImport_CS_Sales_Chart() {
    this.import_sales_cs_chartData.series = this.importsalesarea;       // assign data to the series.
    Highcharts.chart('div-container', this.import_sales_cs_chartData);    // Update the chart.
  }

  showImport_CS_LCL_Chart() {
    this.import_lcl_cs_chartData.series = this.importlclarea;       // assign data to the series.
    Highcharts.chart('div-container', this.import_lcl_cs_chartData);    // Update the chart.
  }

  showImport_CS_FCL_Chart() {
    this.import_fcl_cs_chartData.series = this.importfclarea;       // assign data to the series.
    Highcharts.chart('div-container', this.import_fcl_cs_chartData);    // Update the chart.
  }

  showImport_CS_Documentation_Chart() {
    this.import_documentation_cs_chartData.series = this.importDocumentationarea;       // assign data to the series.
    Highcharts.chart('div-container', this.import_documentation_cs_chartData);    // Update the chart.
  }

  showImport_CS_TranshipmentDesk_Chart() {
    this.import_TranshipmentDesk_cs_chartData.series = this.importTranshipmentDeskarea;       // assign data to the series.
    Highcharts.chart('div-container', this.import_TranshipmentDesk_cs_chartData);    // Update the chart.
  }

  public import_sales_cs_chartData: any = {
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

  public import_lcl_cs_chartData: any = {
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

  public import_fcl_cs_chartData: any = {
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

  get_import_fcl_Customer_Info() {

    const emptyList1: Chart_ImportLcl[] = [];
    this.loginService.getImportFCLCustomerServiceInfo()
      .subscribe(
        (response) => {
          this.datasource_import_FCL_CS = response;
          // Handle the response data here
          console.log('Response:', this.datasource_import_FCL_CS);
          response.map((x: { action: any; count: any }) => {
            var chart_importfcl = new Chart_ImportLcl(x.action, [x.count]);
            emptyList1.push(chart_importfcl);

          })
          this.importfclarea = emptyList1;    // populate array with json.
          this.showImport_CS_FCL_Chart();         // show the chart.
        },
        (error) => {
          // Handle any errors here
          console.error('Error:', error);
        }
      );
  }

  public import_documentation_cs_chartData: any = {
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

  public import_TranshipmentDesk_cs_chartData: any = {
    chart: {
      type: 'column'
    },
    credits: { enabled: false },
    xAxis: {    // the 'x' axis or 'category' axis.
      categories: ['jan', 'feb', 'mar']
    },

    title: {
      text: 'Transhipment Desk'
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

  get_import_lcl_Customer_Info() {

    const emptyList1: Chart_ImportLcl[] = [];
    this.loginService.getImportLCLCustomerServiceInfo()
      .subscribe(
        (response) => {
          this.datasource_import_LCL_CS = response;
          // Handle the response data here
          console.log('Response:', this.datasource_import_LCL_CS);
          response.map((x: { action: any; count: any }) => {
            var chart_importlcl = new Chart_ImportLcl(x.action, [x.count]);
            emptyList1.push(chart_importlcl);

          })
          this.importlclarea = emptyList1;    // populate array with json.
          this.showImport_CS_LCL_Chart();         // show the chart.
        },
        (error) => {
          // Handle any errors here
          console.error('Error:', error);
        }
      );
  }



  get_import_Documentation_Customer_Info() {

    const emptyList1: Chart_ImportLcl[] = [];
    this.loginService.getImportDocumentationCustomerServiceInfo()
      .subscribe(
        (response) => {
          this.datasource_import_Documentation_CS = response;
          // Handle the response data here
          console.log('Response:', this.datasource_import_Documentation_CS);
          response.map((x: { action: any; count: any }) => {
            var chart_importDocumentation = new Chart_ImportLcl(x.action, [x.count]);
            emptyList1.push(chart_importDocumentation);

          })
          this.importDocumentationarea = emptyList1;    // populate array with json.
          this.showImport_CS_Documentation_Chart();         // show the chart.
        },
        (error) => {
          // Handle any errors here
          console.error('Error:', error);
        }
      );
  }

  get_import_TranshipmentDesk_Customer_Info() {

    const emptyList1: Chart_ImportLcl[] = [];
    this.loginService.getImportTranshipmentDeskCustomerServiceInfo()
      .subscribe(
        (response) => {
          this.datasource_import_TranshipmentDesk_CS = response;
          // Handle the response data here
          console.log('Response:', this.datasource_import_TranshipmentDesk_CS);
          response.map((x: { action: any; count: any }) => {
            var chart_importTranshipmentDesk = new Chart_ImportLcl(x.action, [x.count]);
            emptyList1.push(chart_importTranshipmentDesk);

          })
          this.importTranshipmentDeskarea = emptyList1;    // populate array with json.
          this.showImport_CS_TranshipmentDesk_Chart();         // show the chart.
        },
        (error) => {
          // Handle any errors here
          console.error('Error:', error);
        }
      );
  }

  showImport_CS_SalesSupport_PieChart() {
    this.seaImportSalesSupportChart.series[0].data = this.importsalesarea;
    Highcharts.chart('div-container-stackedchartImport-sales', this.seaImportSalesSupportChart);    // Update the chart.
  }

  public seaImportSalesSupportChart: any = {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Sales Support'
    },
    series: [{
      name: 'Actions',
      colorByPoint: true,
      data: []
    }]
  }

  showImport_CS_LCL_StackedChart() {
    this.stackedChartData.series = this.importlclStackedarea;
    this.stackedChartData.xAxis.categories = this.importlcl_cs_sc_xAxis;       // assign data to the series.
    Highcharts.chart('div-container-stackedchartImportLcl', this.stackedChartData);    // Update the chart.
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


    if (event.point.series.name === "outofSLA") {
      dialogRef = this.dialog.open(ImportSalesCountReportComponent, {
        width: '1200px',
        height: '500px',
        data: {
          action: event.point.category,
          withinsla: 0,
          outofsla: 0
        }
      });
    } else {
      dialogRef = this.dialog.open(ImportSalesCountReportComponent, {
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
      dialogRef = this.dialog.open(ImportLclOutofslaReportComponent, {
        width: '1200px',
        height: '500px',
        data: {
          action: event.point.category,
          withinsla: 0,
          outofsla: 0
        }
      });
    } else if (event.point.series.name === "withinsla") {

      dialogRef = this.dialog.open(ImportLclWithinslaReportComponent, {
        width: '1200px',
        height: '500px',

        data: {
          action: event.point.category,
          withinsla: 0
        }
      });
    } else {
      dialogRef = this.dialog.open(ImportLclCountReportComponent, {
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
      dialogRef = this.dialog.open(ImportDocumentationOutofslaReportComponent, {
        width: '1200px',
        height: '500px',
        data: {
          action: event.point.category,
          withinsla: 0,
          outofsla: 0
        }
      });
    } else if (event.point.series.name === "withinsla") {

      dialogRef = this.dialog.open(ImportDocumentationWithinslaReportComponent, {
        width: '1200px',
        height: '500px',

        data: {
          action: event.point.category,
          withinsla: 0
        }
      });
    } else {
      dialogRef = this.dialog.open(ImportDocumentationCountReportComponent, {
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

  openTranshipmentDeskReport(event: any) {

    let queryParams = {};
    let dialogRef: any;


    if (event.point.series.name === "outofSLA") {
      dialogRef = this.dialog.open(ImportTranshipmentDeskOutofslaReportComponent, {
        width: '1200px',
        height: '500px',
        data: {
          action: event.point.category,
          withinsla: 0,
          outofsla: 0
        }
      });
    } else if (event.point.series.name === "withinsla") {

      dialogRef = this.dialog.open(ImportTranshipmentDeskWithinslaReportComponent, {
        width: '1200px',
        height: '500px',

        data: {
          action: event.point.category,
          withinsla: 0
        }
      });
    } else {
      dialogRef = this.dialog.open(ImportTranshipmentDeskCountReportComponent, {
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

  get_import_sales_support_Customer_Info() {
    const list: ChartData[] = [];
    this.loginService.getImportSalesSupportCustomerServiceInfo()
      .subscribe(
        (response) => {
          this.datasource_import_Sales_Support_CS = response;
          response.map((x: { action: string; count: string }) => {
            var chart_exportsales = new ChartData(x.action, x.count);
            list.push(chart_exportsales);

          })
          this.importsalesarea = list;
          this.showImport_CS_SalesSupport_PieChart();         // show the chart.
        },
        (error) => {
          console.error('Error:', error);
        }
      );
  }

  get_import_lcl_Customer_Info_stackedChart() {

    const emptyList1: Chart_ImportLcl[] = [];
    let withinSlaList: string[] = [];
    let outOfSlaList: string[] = [];
    let totalList: string[] = [];

    this.loginService.getImportLCLCustomerServiceInfo()
      .subscribe(
        (response) => {
          this.datasource_import_LCL_CS = response;
          // Handle the response data here


          response.map((y: any) => {
            if (y.count != 1726) {
              withinSlaList.push(y.withinSLA)
              outOfSlaList.push(y.outOfSLA)
              //totalList.push(y.count)
              this.importlcl_cs_sc_xAxis.push(y.action)
            }
          })
          this.importlclStackedarea.push({ "name": "withinsla", "data": withinSlaList });
          this.importlclStackedarea.push({ "name": "outofSLA", "data": outOfSlaList });
          //this.exportlclStackedarea.push({ "name": "total", "data": totalList });
          console.log(JSON.stringify(this.importlclStackedarea))
          this.showImport_CS_LCL_StackedChart();         // show the chart.
        },
        (error) => {
          // Handle any errors here
          console.error('Error:', error);
        }
      );
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

  showImport_CS_FCL_StackedChart() {
    this.stackedChartDataFcl.series = this.importfclStackedarea;
    this.stackedChartDataFcl.xAxis.categories = this.importfcl_cs_sc_xAxis;       // assign data to the series.
    Highcharts.chart('div-container-stackedchartFcl', this.stackedChartDataFcl);    // Update the chart.
  }

  public stackedChartDataFcl: any = {
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


  get_import_fcl_Customer_Info_stackedChart() {

    const emptyList1: Chart_ImportLcl[] = [];
    let withinSlaList: string[] = [];
    let outOfSlaList: string[] = [];
    let totalList: string[] = [];

    this.loginService.getImportFCLCustomerServiceInfo()
      .subscribe(
        (response) => {
          this.datasource_import_FCL_CS = response;
          // Handle the response data here


          response.map((y: any) => {
            // if (y.count != 1726) {
            withinSlaList.push(y.withinSLA)
            outOfSlaList.push(y.outOfSLA)
            totalList.push(y.count)
            this.importfcl_cs_sc_xAxis.push(y.action)
            // }
          })
          this.importfclStackedarea.push({ "name": "withinsla", "data": withinSlaList });
          this.importfclStackedarea.push({ "name": "outofSLA", "data": outOfSlaList });
          this.importfclStackedarea.push({ "name": "total", "data": totalList });
          console.log(JSON.stringify(this.importfclStackedarea))
          this.showImport_CS_FCL_StackedChart();         // show the chart.
        },
        (error) => {
          // Handle any errors here
          console.error('Error:', error);
        }
      );
  }


  showImport_CS_Documentation_StackedChart() {
    this.stackedChartData3.series = this.importDocumentationStackedarea;
    this.stackedChartData3.xAxis.categories = this.importDocumentation_cs_sc_xAxis;       // assign data to the series.
    Highcharts.chart('div-container-stackedchartImportDocumentation', this.stackedChartData3);    // Update the chart.
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


  get_import_Documentation_Customer_Info_stackedChart() {

    const emptyList1: Chart_ImportLcl[] = [];
    let withinSlaList: string[] = [];
    let outOfSlaList: string[] = [];
    let totalList: string[] = [];

    this.loginService.getImportDocumentationCustomerServiceInfo()
      .subscribe(
        (response) => {
          this.datasource_import_Documentation_CS = response;
          // Handle the response data here


          response.map((y: any) => {
            if (y.count != 1726) {
              withinSlaList.push(y.withinSLA)
              outOfSlaList.push(y.outOfSLA)
              totalList.push(y.count)
              this.importDocumentation_cs_sc_xAxis.push(y.action)
            }
          })
          this.importDocumentationStackedarea.push({ "name": "withinsla", "data": withinSlaList });
          this.importDocumentationStackedarea.push({ "name": "outofSLA", "data": outOfSlaList });
          this.importDocumentationStackedarea.push({ "name": "total", "data": totalList });
          console.log(JSON.stringify(this.importDocumentationStackedarea))
          this.showImport_CS_Documentation_StackedChart();         // show the chart.
        },
        (error) => {
          // Handle any errors here
          console.error('Error:', error);
        }
      );
  }

  showImport_CS_TranshipmentDesk_StackedChart() {
    this.stackedChartData4.series = this.importTranshipmentDeskStackedarea;
    this.stackedChartData4.xAxis.categories = this.importTranshipmentDesk_cs_sc_xAxis;       // assign data to the series.
    Highcharts.chart('div-container-stackedchartImportTranshipmentDesk', this.stackedChartData4);    // Update the chart.
  }

  public stackedChartData4: any = {
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
      text: 'Transhipment desk'
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


  get_import_transhipmentDesk_Customer_Info_stackedChart() {

    const emptyList1: Chart_ImportLcl[] = [];
    let withinSlaList: string[] = [];
    let outOfSlaList: string[] = [];
    let totalList: string[] = [];

    this.loginService.getImportTranshipmentDeskCustomerServiceInfo()
      .subscribe(
        (response) => {
          this.datasource_import_TranshipmentDesk_CS = response;
          // Handle the response data here


          response.map((y: any) => {
            if (y.count != 1726) {
              withinSlaList.push(y.withinSLA)
              outOfSlaList.push(y.outOfSLA)
              totalList.push(y.count)
              this.importTranshipmentDesk_cs_sc_xAxis.push(y.action)
            }
          })
          this.importTranshipmentDeskStackedarea.push({ "name": "withinsla", "data": withinSlaList });
          this.importTranshipmentDeskStackedarea.push({ "name": "outofSLA", "data": outOfSlaList });
          this.importTranshipmentDeskStackedarea.push({ "name": "total", "data": totalList });
          console.log(JSON.stringify(this.importTranshipmentDeskStackedarea))
          this.showImport_CS_TranshipmentDesk_StackedChart();         // show the chart.
        },
        (error) => {
          // Handle any errors here
          console.error('Error:', error);
        }
      );
  }


}

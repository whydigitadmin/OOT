import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';
import { LoginService } from 'src/app/service/login.service';
import { ChartData, Chart_AirExportLcl, Chart_AirImportLcl, Chart_ExportLcl } from 'src/app/model/user-details.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AirImportSalesSupportCountReportComponent } from 'src/app/report/air-import/air-import-sales-support-report/air-import-sales-support-count-report/air-import-sales-support-count-report.component';
import { AirImportCustomerServiceOutofslaReportComponent } from 'src/app/report/air-import/air-import-customer-service-report/air-import-customer-service-outofsla-report/air-import-customer-service-outofsla-report.component';
import { AirImportCustomerServiceWithinslaReportComponent } from 'src/app/report/air-import/air-import-customer-service-report/air-import-customer-service-withinsla-report/air-import-customer-service-withinsla-report.component';
import { AirImportCustomerServiceCountReportComponent } from 'src/app/report/air-import/air-import-customer-service-report/air-import-customer-service-count-report/air-import-customer-service-count-report.component';
import { AirImportDocumentationOutofslaReportComponent } from 'src/app/report/air-import/air-import-documentation-report/air-import-documentation-outofsla-report/air-import-documentation-outofsla-report.component';
import { AirImportDocumentationWithinslaReportComponent } from 'src/app/report/air-import/air-import-documentation-report/air-import-documentation-withinsla-report/air-import-documentation-withinsla-report.component';
import { AirImportDocumentationCountReportComponent } from 'src/app/report/air-import/air-import-documentation-report/air-import-documentation-count-report/air-import-documentation-count-report.component';
import { AirImportTranshipmentDeskOutofslaReportComponent } from 'src/app/report/air-import/air-import-transhipmentDesk-report/air-import-transhipment-desk-outofsla-report/air-import-transhipment-desk-outofsla-report.component';
import { AirImportTranshipmentDeskWithinslaReportComponent } from 'src/app/report/air-import/air-import-transhipmentDesk-report/air-import-transhipment-desk-withinsla-report/air-import-transhipment-desk-withinsla-report.component';
import { AirImportTranshipmentDeskCountReportComponent } from 'src/app/report/air-import/air-import-transhipmentDesk-report/air-import-transhipment-desk-count-report/air-import-transhipment-desk-count-report.component';

HighchartsMore(Highcharts);
HighchartsSolidGauge(Highcharts);

@Component({
  selector: 'app-chart-air-import',
  templateUrl: './chart-air-import.component.html',
  styleUrls: ['./chart-air-import.component.scss']
})

export class ChartAirImportComponent implements OnInit {

  public airimportsalesarea: any;
  public airimportcustomerServicearea: any;
  public airimportDocumentationarea: any;
  public airimportTranshipmentDeskarea: any;
  public airimportSalesStackedarea = [{}];
  public airimportcustomerServiceStackedarea = [{}];
  public airimportDocumentationStackedarea = [{}];
  public airimportTranshipmentDeskStackedarea = [{}];
  datasource_airimport_Sales_Support_CS = [{}];
  datasource_airimport_customerService_CS = [{}];
  datasource_airimport_Documentation_CS = [{}];
  datasource_airimport_TranshipmentDesk_CS = [{}];
  airimportSales_cs_sc_xAxis: string[] = [];
  airimportcustomerService_cs_sc_xAxis: string[] = [];
  airimportDocumentation_cs_sc_xAxis: string[] = [];
  airimportTranshipmentDesk_cs_sc_xAxis: string[] = [];

  constructor(private loginService: LoginService, private dialog: MatDialog) { }

  public ngOnInit(): void {
    this.get_airimport_salesSupport_Customer_Info();
    this.get_airimport_customerService_Customer_Info_stackedChart();
    this.get_airimport_CustomerService_Customer_Info();
    this.get_airimport_Documentation_Customer_Info_stackedChart();
    this.get_airimport_Documentation_Customer_Info();
    this.get_airimport_TranshipmentDesk_Customer_Info_stackedChart();
    this.get_airimport_TranshipmentDesk_Customer_Info();
  }

  showAirImport_CS_Sales_Chart() {
    this.airimport_sales_cs_chartData.series = this.airimportsalesarea;       // assign data to the series.
    Highcharts.chart('div-container', this.airimport_sales_cs_chartData);    // Update the chart.
  }

  showAirImport_CS_CustomerService_Chart() {
    this.import_customerService_cs_chartData.series = this.airimportcustomerServicearea;       // assign data to the series.
    Highcharts.chart('div-container', this.import_customerService_cs_chartData);    // Update the chart.
  }

  showAirImport_CS_Documentation_Chart() {
    this.airimport_documentation_cs_chartData.series = this.airimportDocumentationarea;       // assign data to the series.
    Highcharts.chart('div-container', this.airimport_documentation_cs_chartData);    // Update the chart.
  }

  showAirImport_CS_TranshipmentDesk_Chart() {
    this.airimport_TranshipmentDesk_cs_chartData.series = this.airimportTranshipmentDeskarea;       // assign data to the series.
    Highcharts.chart('div-container', this.airimport_TranshipmentDesk_cs_chartData);    // Update the chart.
  }

  public airimport_sales_cs_chartData: any = {
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

  public import_customerService_cs_chartData: any = {
    chart: {
      type: 'column'
    },
    credits: { enabled: false },
    xAxis: {    // the 'x' axis or 'category' axis.
      categories: ['jan', 'feb', 'mar']
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

  public airimport_documentation_cs_chartData: any = {
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

  public airimport_TranshipmentDesk_cs_chartData: any = {
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

  get_airimport_CustomerService_Customer_Info() {

    const emptyList1: Chart_AirImportLcl[] = [];
    this.loginService.getAirImportCSCustomerServiceInfo()
      .subscribe(
        (response) => {
          this.datasource_airimport_customerService_CS = response;
          // Handle the response data here
          console.log('Response:', this.datasource_airimport_customerService_CS);
          response.map((x: { action: any; count: any }) => {
            var chart_airimportcustomerService = new Chart_AirImportLcl(x.action, [x.count]);
            emptyList1.push(chart_airimportcustomerService);

          })
          this.airimportcustomerServicearea = emptyList1;    // populate array with json.
          this.showAirImport_CS_CustomerService_Chart();         // show the chart.
        },
        (error) => {
          // Handle any errors here
          console.error('Error:', error);
        }
      );
  }

  get_airimport_Documentation_Customer_Info() {

    const emptyList1: Chart_AirImportLcl[] = [];
    this.loginService.getAirImportDocumentationCustomerServiceInfo()
      .subscribe(
        (response) => {
          this.datasource_airimport_Documentation_CS = response;
          // Handle the response data here
          console.log('Response:', this.datasource_airimport_Documentation_CS);
          response.map((x: { action: any; count: any }) => {
            var chart_airimportDocumentation = new Chart_AirImportLcl(x.action, [x.count]);
            emptyList1.push(chart_airimportDocumentation);

          })
          this.airimportDocumentationarea = emptyList1;    // populate array with json.
          this.showAirImport_CS_Documentation_Chart();         // show the chart.
        },
        (error) => {
          // Handle any errors here
          console.error('Error:', error);
        }
      );
  }

  get_airimport_TranshipmentDesk_Customer_Info() {

    const emptyList1: Chart_AirImportLcl[] = [];
    this.loginService.getAirImportTranshipmentDeskCustomerServiceInfo()
      .subscribe(
        (response) => {
          this.datasource_airimport_TranshipmentDesk_CS = response;
          // Handle the response data here
          console.log('Response:', this.datasource_airimport_TranshipmentDesk_CS);
          response.map((x: { action: any; count: any }) => {
            var chart_airimportTranshipmentDesk = new Chart_AirImportLcl(x.action, [x.count]);
            emptyList1.push(chart_airimportTranshipmentDesk);

          })
          this.airimportTranshipmentDeskarea = emptyList1;    // populate array with json.
          this.showAirImport_CS_TranshipmentDesk_Chart();         // show the chart.
        },
        (error) => {
          // Handle any errors here
          console.error('Error:', error);
        }
      );
  }

  showAirImport_CS_SalesSupport_PieChart() {
    this.airExportSalesSupportChart.series[0].data = this.airimportsalesarea;
    Highcharts.chart('div-container-stackedchart-airimport-sales', this.airExportSalesSupportChart);    // Update the chart.
  }

  public airExportSalesSupportChart: any = {
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

  showAirImport_CS_CustomerService_StackedChart() {
    this.stackedChartData.series = this.airimportcustomerServiceStackedarea;
    this.stackedChartData.xAxis.categories = this.airimportcustomerService_cs_sc_xAxis;       // assign data to the series.
    Highcharts.chart('div-container-stackedchart-airimport-cs', this.stackedChartData);    // Update the chart.
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
      dialogRef = this.dialog.open(AirImportSalesSupportCountReportComponent, {
        width: '1200px',
        height: '500px',
        data: {
          action: event.point.category,
          withinsla: 0,
          outofsla: 0
        }
      });
    } else {
      dialogRef = this.dialog.open(AirImportSalesSupportCountReportComponent, {
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
      dialogRef = this.dialog.open(AirImportCustomerServiceOutofslaReportComponent, {
        width: '1200px',
        height: '500px',
        data: {
          action: event.point.category,
          withinsla: 0,
          outofsla: 0
        }
      });
    } else if (event.point.series.name === "withinsla") {

      dialogRef = this.dialog.open(AirImportCustomerServiceWithinslaReportComponent, {
        width: '1200px',
        height: '500px',

        data: {
          action: event.point.category,
          withinsla: 0
        }
      });
    } else {
      dialogRef = this.dialog.open(AirImportCustomerServiceCountReportComponent, {
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
      dialogRef = this.dialog.open(AirImportDocumentationOutofslaReportComponent, {
        width: '1200px',
        height: '500px',
        data: {
          action: event.point.category,
          withinsla: 0,
          outofsla: 0
        }
      });
    } else if (event.point.series.name === "withinsla") {

      dialogRef = this.dialog.open(AirImportDocumentationWithinslaReportComponent, {
        width: '1200px',
        height: '500px',

        data: {
          action: event.point.category,
          withinsla: 0
        }
      });
    } else {
      dialogRef = this.dialog.open(AirImportDocumentationCountReportComponent, {
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
      dialogRef = this.dialog.open(AirImportTranshipmentDeskOutofslaReportComponent, {
        width: '1200px',
        height: '500px',
        data: {
          action: event.point.category,
          withinsla: 0,
          outofsla: 0
        }
      });
    } else if (event.point.series.name === "withinsla") {

      dialogRef = this.dialog.open(AirImportTranshipmentDeskWithinslaReportComponent, {
        width: '1200px',
        height: '500px',

        data: {
          action: event.point.category,
          withinsla: 0
        }
      });
    } else {
      dialogRef = this.dialog.open(AirImportTranshipmentDeskCountReportComponent, {
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

  get_airimport_salesSupport_Customer_Info() {
    const list: ChartData[] = [];
    this.loginService.getAirImportSalesCustomerServiceInfo()
      .subscribe(
        (response) => {
          this.datasource_airimport_Sales_Support_CS = response;
          response.map((x: { action: string; count: string }) => {
            var chart_exportsales = new ChartData(x.action, x.count);
            list.push(chart_exportsales);

          })
          this.airimportsalesarea = list;
          this.showAirImport_CS_SalesSupport_PieChart();         // show the chart.
        },
        (error) => {
          console.error('Error:', error);
        }
      );
  }

  get_airimport_customerService_Customer_Info_stackedChart() {

    const emptyList1: Chart_AirImportLcl[] = [];
    let withinSlaList: string[] = [];
    let outOfSlaList: string[] = [];
    let totalList: string[] = [];

    this.loginService.getAirImportCSCustomerServiceInfo()
      .subscribe(
        (response) => {
          this.datasource_airimport_customerService_CS = response;
          // Handle the response data here


          response.map((y: any) => {
            if (y.count != 1726) {
              withinSlaList.push(y.withinSLA)
              outOfSlaList.push(y.outOfSLA)
              //totalList.push(y.count)
              this.airimportcustomerService_cs_sc_xAxis.push(y.action)
            }
          })
          this.airimportcustomerServiceStackedarea.push({ "name": "withinsla", "data": withinSlaList });
          this.airimportcustomerServiceStackedarea.push({ "name": "outofSLA", "data": outOfSlaList });
          //this.exportlclStackedarea.push({ "name": "total", "data": totalList });
          console.log(JSON.stringify(this.airimportcustomerServiceStackedarea))
          this.showAirImport_CS_CustomerService_StackedChart();         // show the chart.
        },
        (error) => {
          // Handle any errors here
          console.error('Error:', error);
        }
      );
  }

  showAirImport_CS_Documentation_StackedChart() {
    this.stackedChartData3.series = this.airimportDocumentationStackedarea;
    this.stackedChartData3.xAxis.categories = this.airimportDocumentation_cs_sc_xAxis;       // assign data to the series.
    Highcharts.chart('div-container-stackedchart-airimport-documentation', this.stackedChartData3);    // Update the chart.
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


  get_airimport_Documentation_Customer_Info_stackedChart() {

    const emptyList1: Chart_AirExportLcl[] = [];
    let withinSlaList: string[] = [];
    let outOfSlaList: string[] = [];
    let totalList: string[] = [];

    this.loginService.getAirImportDocumentationCustomerServiceInfo()
      .subscribe(
        (response) => {
          this.datasource_airimport_Documentation_CS = response;
          // Handle the response data here


          response.map((y: any) => {
            if (y.count != 1726) {
              withinSlaList.push(y.withinSLA)
              outOfSlaList.push(y.outOfSLA)
              totalList.push(y.count)
              this.airimportDocumentation_cs_sc_xAxis.push(y.action)
            }
          })
          this.airimportDocumentationStackedarea.push({ "name": "withinsla", "data": withinSlaList });
          this.airimportDocumentationStackedarea.push({ "name": "outofSLA", "data": outOfSlaList });
          this.airimportDocumentationStackedarea.push({ "name": "total", "data": totalList });
          console.log(JSON.stringify(this.airimportDocumentationStackedarea))
          this.showAirImport_CS_Documentation_StackedChart();         // show the chart.
        },
        (error) => {
          // Handle any errors here
          console.error('Error:', error);
        }
      );
  }

  showAirImport_CS_TranshipmentDesk_StackedChart() {
    this.stackedChartData4.series = this.airimportTranshipmentDeskStackedarea;
    this.stackedChartData4.xAxis.categories = this.airimportTranshipmentDesk_cs_sc_xAxis;       // assign data to the series.
    Highcharts.chart('div-container-stackedchart-air-transhipment', this.stackedChartData4);    // Update the chart.
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
          click: this.openTranshipmentDeskReport.bind(this)
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


  get_airimport_TranshipmentDesk_Customer_Info_stackedChart() {

    const emptyList1: Chart_AirImportLcl[] = [];
    let withinSlaList: string[] = [];
    let outOfSlaList: string[] = [];
    let totalList: string[] = [];

    this.loginService.getAirImportTranshipmentDeskCustomerServiceInfo()
      .subscribe(
        (response) => {
          this.datasource_airimport_TranshipmentDesk_CS = response;
          // Handle the response data here


          response.map((y: any) => {
            if (y.count != 1726) {
              withinSlaList.push(y.withinSLA)
              outOfSlaList.push(y.outOfSLA)
              totalList.push(y.count)
              this.airimportTranshipmentDesk_cs_sc_xAxis.push(y.action)
            }
          })
          this.airimportTranshipmentDeskStackedarea.push({ "name": "withinsla", "data": withinSlaList });
          this.airimportTranshipmentDeskStackedarea.push({ "name": "outofSLA", "data": outOfSlaList });
          this.airimportTranshipmentDeskStackedarea.push({ "name": "total", "data": totalList });
          console.log(JSON.stringify(this.airimportTranshipmentDeskStackedarea))
          this.showAirImport_CS_TranshipmentDesk_StackedChart();         // show the chart.
        },
        (error) => {
          // Handle any errors here
          console.error('Error:', error);
        }
      );
  }


}


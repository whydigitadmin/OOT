import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Globals, Shipment, ShipmentCount } from '../model/user-details.model';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-sales-details',
  templateUrl: './sea-export.component.html',
  styleUrls: ['./sea-export.component.scss']
})
export class SalesDetailsComponent implements OnInit {

  shipCount: ShipmentCount = {
    count: 0
  };
  chartData: any = [this.shipCount.count];

  constructor(private loginService: LoginService, private globals: Globals) {
    const formData = new Shipment(1, 121, "Air");
    this.loginService.getShipmentCount(formData).subscribe(response => {

      if (response) {
        console.log("response count :", response.value);
        this.shipCount.count = response.value;
        this.chartData = response.value;
        console.log("response count :", response.value);
        this.chartData = {...this.chartData} 
        this.loadCharts();
      }
    }, error => {

    });
  }
 
  updateFlag = false;
  Highcharts1: typeof Highcharts = Highcharts;
  
  chartOptions1: Highcharts.Options = {
    chart: {
      plotBorderWidth: 0,
      plotShadow: false
    },
    title: {
      text: 'Unapproved Quotation'
    },
    xAxis: {
      allowDecimals: false,
      accessibility: {
        rangeDescription: 'Range: 2020 to 2023.'
      }
    },
    yAxis: {
      title: {
        text: 'Quotation Count'
      }
    }, 
    tooltip: {
      pointFormat: '{series.name}: <b>{point.y}</b>'
    },
    plotOptions: {
      line: {
        pointStart: 2020,
        allowPointSelect: true,
        cursor: 'pointer',

        dataLabels: {
          enabled: false
        },

        showInLegend: true
      },
      series: {
        label: {
            connectorAllowed: false
        },
        pointStart: 2020
    }
    },
    series: [{
      type: 'line',
      name: 'Quotation Count',
      data: []
     
      
    }],
    credits: {
      enabled: false
    }
  };


  Highcharts2: typeof Highcharts = Highcharts;
  chartOptions2: Highcharts.Options = {
    chart: {
      plotBorderWidth: 0,
      plotShadow: false
    },
    title: {
      text: 'Approved Quotation List'
    },
    xAxis: {
      allowDecimals: false,
      accessibility: {
        rangeDescription: 'Range: 2020 to 2023.'
      }
    },
    yAxis: {
      title: {
        text: 'Quotation Count'
      }
    },    
    tooltip: {
      pointFormat: '{series.name}: <b>{point.y}</b>'
    },
    plotOptions: {
      line : {
        pointStart: 2020,
        allowPointSelect: true,
        cursor: 'pointer',

        dataLabels: {
          enabled: false
        },

        showInLegend: true
      }
    },    
    series: [{
      type: 'line',
      name: 'Quotation Count',
      data: [
        ['2021', this.shipCount.count],
        ['2022', (100-this.shipCount.count)],
        
      ]
    }],
    credits: {
      enabled: false
    }
  };

  Highcharts3: typeof Highcharts = Highcharts;
  chartOptions3: Highcharts.Options = {
    chart: {
      plotBorderWidth: 0,
      plotShadow: false,
      options3d: {
        enabled: true,
        alpha: 45,
        beta: 0
      }
    },
    title: {
      text: 'Avg. Shipments'
    },
    xAxis: {
      allowDecimals: false,
      accessibility: {
        rangeDescription: 'Range: 2020 to 2023.'
      }
    },
    yAxis: {
      title: {
        text: 'Avg. Shipments'
      }
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.y}</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',

        dataLabels: {
          enabled: false
        },

        showInLegend: true
      },
      area: {
        pointStart: 2020,
        marker: {
          enabled: false,
          symbol: 'circle',
          radius: 2,
          states: {
            hover: {
              enabled: true
            }
          }
        }
      }
    },
    series: [{
      type: 'area',
      name: 'Tranportation Mode',
      data: [
        ['Air', 40],
        ['Sea', 30],
        ['Road', 20],
        ['Rail', 10]
      ]
    }],
    credits: {
      enabled: false
    }
  };
  ngOnInit() {
    // const formData = new Shipment(this.globals.companyId, this.globals.homeDeptId, "Air");
    // this.loginService.getShipmentCount(formData).subscribe(response => {

    //   if (response) {
    //     this.shipCount.count = response.value;
    //     this.loadCharts();
    //   }
    // }, error => {

    // });
  }

  loadCharts() {
    console.log("this.shipCount.count: ", this.shipCount.count);
    
    this.chartOptions1.series = 
      [{
        type: 'line',
        name: 'Quotation Count',
        data:  {...this.chartData}
        
      }]    

    this.updateFlag = true;
    /*this.chartOptions1 = {
      chart: {
        plotBorderWidth: 0,
        plotShadow: false
      },
      title: {
        text: 'Unapproved Quotation'
      },
      xAxis: {
        allowDecimals: false,
        accessibility: {
          rangeDescription: 'Range: 2020 to 2023.'
        }
      },
      yAxis: {
        title: {
          text: 'Quotation Count'
        }
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.y}</b>'
      },
      plotOptions: {
        line : {
          pointStart: 2020,
          allowPointSelect: true,
          cursor: 'pointer',

          dataLabels: {
            enabled: false
          },

          showInLegend: true
        }
      },
      series: [{
        type: 'line',
        name: 'Quotation Count',
        data: [...['2021',this.shipCount.count],
        ['2022', (100-this.shipCount.count)]
       
        ]
      }],
      credits: {
        enabled: false
      }
    };*/
  }


  
}

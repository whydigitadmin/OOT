import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Globals, Shipment, ShipmentCount } from '../model/user-details.model';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private loginService: LoginService, private globals: Globals) {
    const formData = new Shipment(this.globals.companyId, this.globals.homeDeptId, "Air");
    this.loginService.getShipmentCount(formData).subscribe(response => {

      if (response) {
        console.log("response count :", response.value);
        this.shipCount.count = response.value;
        this.loadCharts();
      }
    }, error => {

    });
  }
  shipCount: ShipmentCount = {
    count: 30
  };
  Highcharts1: typeof Highcharts = Highcharts;
  
  chartOptions1: Highcharts.Options = {
    chart: {
      plotBorderWidth: 0,
      plotShadow: false
    },
    title: {
      text: 'Total Shipments Executed'
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
      }
    },
    series: [{
      type: 'pie',
      name: 'Tranportation Mode',
      data: [...['Air',this.shipCount.count],
      ['Sea', (100-this.shipCount.count)]
     
      ]
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
      text: 'Total Enquiries'
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
      }
    },
    series: [{
      type: 'line',
      name: 'Tranportation Mode',
      data: [
        ['Air', this.shipCount.count],
        ['Sea', (100-this.shipCount.count)],
        
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
    this.chartOptions1 = {
      chart: {
        plotBorderWidth: 0,
        plotShadow: false
      },
      title: {
        text: 'Total Shipments Executed'
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
        }
      },
      series: [{
        type: 'pie',
        name: 'Tranportation Mode',
        data: [...['Air',this.shipCount.count],
        ['Sea', (100-this.shipCount.count)]
       
        ]
      }],
      credits: {
        enabled: false
      }
    };
  }


  
}

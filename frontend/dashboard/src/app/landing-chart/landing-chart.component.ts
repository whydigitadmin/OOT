import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from 'src/app/model/user-details.model';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-landing-chart',
  templateUrl: './landing-chart.component.html',
  styleUrls: ['./landing-chart.component.scss']
})

export class LandingChartComponent implements OnInit {

  seaExportDataLoading: boolean = true;
  seaImportDataLoading: boolean = true;
  airExportDataLoading: boolean = true;
  airImportDataLoading: boolean = true;

  constructor(private router: Router, private globals: Globals, private loginService: LoginService) {
    // Simulate loading delay for all tabs
    setTimeout(() => {
      this.seaExportDataLoading = false;
      this.seaImportDataLoading = false;
      this.airExportDataLoading = false;
      this.airImportDataLoading = false;
    }, 2000); // Simulated 2 seconds loading delay
  }

  tabChanged(tabIndex: number) {
    // Set loading flag for the selected tab to true
    switch (tabIndex) {
      case 0: // Sea Export tab
        this.seaExportDataLoading = true;
        // Simulate data loading delay
        setTimeout(() => {
          this.seaExportDataLoading = false;
        }, 2000);
        break;
      case 1: // Sea Import tab
        this.seaImportDataLoading = true;
        // Simulate data loading delay
        setTimeout(() => {
          this.seaImportDataLoading = false;
        }, 2000);
        break;
      case 2: // Air Export tab
        this.airExportDataLoading = true;
        // Simulate data loading delay
        setTimeout(() => {
          this.airExportDataLoading = false;
        }, 2000);
        break;
      case 3: // Air Import tab
        this.airImportDataLoading = true;
        // Simulate data loading delay
        setTimeout(() => {
          this.airImportDataLoading = false;
        }, 2000);
        break;
    }
  }

  ngOnInit() {
  }

  isProductMatching(product: string): any {
    return this.globals.productRoles.find((role: any) => role.productCode === product);
  }

}

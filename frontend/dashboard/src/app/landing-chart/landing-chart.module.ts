import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { HighchartsChartModule } from 'highcharts-angular';
import { LandingChartComponent } from './landing-chart.component';
import { SeaDashboardComponent } from '../views/pages/sea-dashboard/sea-dashboard.component';
import { MatTabsModule } from '@angular/material/tabs';
import { SeaImportDashboardComponent } from '../views/pages/sea-import-dashboard/sea-import-dashboard.component';
import { SeaExportDetailsComponent } from '../sea-export-details/sea-export-details.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AirExportDashboardComponent } from '../views/pages/air-export-dashboard/air-export-dashboard.component';
// import { ChartComponent } from '../chart/chart.component';
import { AirImportDashboardComponent } from '../views/pages/air-import-dashboard/air-import-dashboard.component';
import { ChartSeaExportComponent } from '../chart/chart-sea-export/chart-sea-export/chart-sea-export.component';
import { ChartSeaImportComponent } from '../chart/chart-sea-import/chart-sea-import/chart-sea-import.component';
import { ChartAirExportComponent } from '../chart/chart-air-export/chart-air-export/chart-air-export.component';
import { ChartAirImportComponent } from '../chart/chart-air-import/chart-air-import/chart-air-import.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatGridListModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    HighchartsChartModule,
    MatTabsModule,
    SidebarComponent,
    MatProgressSpinnerModule,
    // LogoutComponent,
    RouterModule.forChild([
      {
        path: '',
        component: LandingChartComponent
      },

      // {
      //   path: '',
      //   component: ChartComponent
      // },
      // {
      //   path: 'landing-chart',
      //   component: LandingChartComponent
      // },
      // {
      //   path: 'dashboard',
      //   component: SeaDashboardComponent
      // },
      {
        path: 'sea-import-chart',
        component: ChartSeaImportComponent
      },
      {
        path: 'sea-export-chart',
        component: ChartSeaExportComponent
      },
      {
        path: 'air-export-chart',
        component: ChartAirExportComponent
      },
      {
        path: 'air-import-chart',
        component: ChartAirImportComponent
      },
      // {
      //   path: 'chart',
      //   component: ChartComponent
      // },
    ]),
  ],
  providers: [
    BsModalService
  ],
  declarations: [
    // SeaDashboardComponent,
    // SeaImportDashboardComponent,
    // SeaExportDetailsComponent,
    // AirExportDashboardComponent,
    // AirImportDashboardComponent,
    // ChartComponent,
    ChartSeaExportComponent,
    ChartSeaImportComponent,
    LandingChartComponent,
    ChartAirExportComponent,
    ChartAirImportComponent

  ]
})
export class LandingChartModule {
}

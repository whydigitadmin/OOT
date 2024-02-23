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
import { MatTabsModule } from '@angular/material/tabs';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ChartSeaExportComponent } from './chart/chart-sea-export/chart-sea-export/chart-sea-export.component';
import { ChartSeaImportComponent } from './chart/chart-sea-import/chart-sea-import/chart-sea-import.component';
import { ChartAirExportComponent } from './chart/chart-air-export/chart-air-export/chart-air-export.component';
import { ChartAirImportComponent } from './chart/chart-air-import/chart-air-import/chart-air-import.component';
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
    RouterModule.forChild([
      {
        path: '',
        component: LandingChartComponent
      },
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
    ]),
  ],
  providers: [
    BsModalService
  ],
  declarations: [
    ChartSeaExportComponent,
    ChartSeaImportComponent,
    LandingChartComponent,
    ChartAirExportComponent,
    ChartAirImportComponent

  ]
})
export class LandingChartModule {
}

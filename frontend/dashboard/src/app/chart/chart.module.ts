// Angular
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

import { SeaDashboardComponent } from '../views/pages/sea-dashboard/sea-dashboard.component';
import { MatTabsModule } from '@angular/material/tabs';
import { SeaImportDashboardComponent } from '../views/pages/sea-import-dashboard/sea-import-dashboard.component';
import { SeaExportDetailsComponent } from '../sea-export-details/sea-export-details.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AirExportDashboardComponent } from '../views/pages/air-export-dashboard/air-export-dashboard.component';
import { ChartComponent } from '../chart/chart.component';
import { MatCardModule } from '@angular/material/card';

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
		MatCardModule,
		// LogoutComponent,
		RouterModule.forChild([

			{
				path: '',
				component: ChartComponent
			},
			{
				path: 'landing',
				component: SeaDashboardComponent
			}
		]),
	],
	providers: [
		BsModalService
	],
	declarations: [


	]
})
export class ChartModule {
}
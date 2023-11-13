// Angular
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { HighchartsChartModule } from 'highcharts-angular';
import { LandingPageComponent } from './landing-page.component';
import { SeaDashboardComponent } from '../views/pages/sea-dashboard/sea-dashboard.component';
import {MatTabsModule} from '@angular/material/tabs';
import { SeaImportDashboardComponent } from '../views/pages/sea-import-dashboard/sea-import-dashboard.component';
import { SeaExportDetailsComponent } from '../sea-export-details/sea-export-details.component';

@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		FormsModule,
		ReactiveFormsModule,
		MatGridListModule,
		MatListModule,
		MatGridListModule,
		MatExpansionModule,
		MatTableModule,
		MatButtonModule,
		MatListModule,
		MatGridListModule,
		MatExpansionModule,
		MatIconModule,
		MatFormFieldModule,
		MatInputModule,
		MatDatepickerModule,
		MatNativeDateModule,
		HighchartsChartModule,
		MatTabsModule,
		RouterModule.forChild([
			{
				path: '',
				component: LandingPageComponent
			},
			{
				path: 'landing',
				component: LandingPageComponent
			},
			{
				path: 'dashboard',
				component: SeaDashboardComponent
			},
			{
				path: 'sea-import-dashboard',
				component: SeaImportDashboardComponent
			},
			{
				path: 'sea-export-details',
				component: SeaExportDetailsComponent
			},
		]),
	],
	providers: [],
	declarations: [
		SeaDashboardComponent,
		SeaImportDashboardComponent,
		SeaExportDetailsComponent,
		LandingPageComponent
	]
})
export class LandingPageModule {
}

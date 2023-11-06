// Angular
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
// Core Module
//import { ReactiveFormsModule } from '@angular/forms';
//import { MatTableModule } from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SeaDashboardComponent } from './sea-dashboard.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import {Component, ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatNativeDateModule} from '@angular/material/core';
import { HighchartsChartModule } from 'highcharts-angular';
import { SeaExportComponent } from 'src/app/sea-export/sea-export.component';

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
		RouterModule.forChild([
			{
				path: '',
				component: SeaDashboardComponent
			  },
			{
				path: 'dashboard',
				component: SeaDashboardComponent
			  },
			{
				path: 'dashboard/sea-export',
				component: SeaExportComponent
			},
		]),
	],
	providers: [],
	declarations: [
		SeaDashboardComponent,
		SeaExportComponent
	]
})
export class SeaDashboardModule {
}

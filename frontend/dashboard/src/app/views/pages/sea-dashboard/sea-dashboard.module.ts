// Angular
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
// Core Module
//import { ReactiveFormsModule } from '@angular/forms';
//import { MatTableModule } from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SeaDashboardComponent } from './sea-dashboard.component';

@NgModule({
	imports: [
		CommonModule,		
		ReactiveFormsModule,		
		FormsModule,
		ReactiveFormsModule,
		RouterModule.forChild([
			{
				path: '',
				component: SeaDashboardComponent
			  },
			{
				path: 'dashboard',
				component: SeaDashboardComponent
			  },
		]),
	],
	providers: [],
	declarations: [
		SeaDashboardComponent
	]
})
export class SeaDashboardModule {
}

// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HighchartsChartModule } from 'highcharts-angular';
import { LoginScreenComponent } from './login-screen.component';

const routes: Routes = [
	{
		path: '',
		component: LoginScreenComponent,
		children: [
			{
				path: '',
				redirectTo: 'login',
				pathMatch: 'full'
			},
			{
				path: 'login',
				component: LoginScreenComponent
			},

		]
	}
];


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		HighchartsChartModule,
		RouterModule.forChild(routes),

	],
	providers: [

	],
	exports: [],
	declarations: [	
	]
})

export class LoginScreenModule {

}

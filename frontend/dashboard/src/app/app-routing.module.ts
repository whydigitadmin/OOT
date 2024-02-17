import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { LayoutComponent } from './layout/layout.component';
import { ExportLclReportComponent } from './report/sea-export/export-lcl-report/export-lcl-report/export-lcl-report.component';
import { ExportLclWithinslaReportComponent } from './report/sea-export/export-lcl-report/export-lcl-withinsla-report/export-lcl-withinsla-report.component';

const routes: Routes = [

	{ path: '', redirectTo: 'login', pathMatch: 'full' },

	{ path: 'login', component: LoginScreenComponent },

	{ path: 'lcl-details', component: ExportLclReportComponent },

	{ path: 'lcl-withinsla-details', component: ExportLclWithinslaReportComponent },

	{
		path: '',
		component: LayoutComponent,
		canActivate: [],
		children: [
			{
				path: 'landing',
				loadChildren: () => import('../app/landing-page/landing-page.module').then(m => m.LandingPageModule)
			},

			{
				path: 'landing-chart',
				loadChildren: () => import('../app/landing-chart/landing-chart.module').then(m => m.LandingChartModule)
			}

		]
	}
];


@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }

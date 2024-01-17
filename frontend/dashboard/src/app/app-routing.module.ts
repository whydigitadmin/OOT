import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { LayoutComponent } from './layout/layout.component';
import { ExportLclReportComponent } from './report/sea-export/export-lcl-report/export-lcl-report/export-lcl-report.component';
import { ExportLclWithinslaReportComponent } from './report/sea-export/export-lcl-report/export-lcl-withinsla-report/export-lcl-withinsla-report.component';
import { ChartComponent } from './chart/chart.component';

const routes: Routes = [

	{ path: '', redirectTo: 'login', pathMatch: 'full' },

	{ path: 'login', component: LoginScreenComponent },

	// { path: 'chart', component: ChartComponent },

	{ path: 'lcl-details', component: ExportLclReportComponent },

	{ path: 'lcl-withinsla-details', component: ExportLclWithinslaReportComponent },
	// {
	//   path: 'sea-export', component: SeaExportComponent  },

	{
		path: '',
		component: LayoutComponent,
		canActivate: [],
		children: [
			// {
			// 	path: 'dashboard',
			// 	loadChildren: () => import('../app/views/pages/sea-dashboard/sea-dashboard.module').then(m => m.SeaDashboardModule)
			// },
			{
				path: 'landing',
				loadChildren: () => import('../app/landing-page/landing-page.module').then(m => m.LandingPageModule)
			},
			{
				path: 'chart',
				loadChildren: () => import('../app/chart/chart.module').then(m => m.ChartModule)
			},
			// {
			// 	path: 'operations',
			// 	loadChildren: () => import('./operation-dashboard1/operation-dashboard1.module').then(m => m.OperationDashboard1Module)
			// },
			// {
			// 	path: 'home',
			// 	loadChildren: () => import('../app/sidebar/sidebar.module').then(m => m.SidebarModule)
			// },
			// {
			// 	path: 'chart',
			// 	loadChildren: () => import('../app/sidebar/sidebar.module').then(m => m.SidebarModule)
			// },
			// {
			// 	path: 'operations',
			// 	loadChildren: () => import('../app/sidebar/sidebar.module').then(m => m.SidebarModule)
			// }

		]
	}
];


@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }

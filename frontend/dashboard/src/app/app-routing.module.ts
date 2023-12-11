import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  
  { path: 'login', component: LoginScreenComponent },
  // {
  //   path: 'sea-export', component: SeaExportComponent  },
  
  {
		path: '',
		component: LayoutComponent,
		canActivate: [],
		children: [
			/*{
				path: 'dashboard',
				loadChildren: () => import('../app/views/pages/sea-dashboard/sea-dashboard.module').then(m => m.SeaDashboardModule)
			}*/
      {
				path: 'landing',
				loadChildren: () => import('../app/landing-page/landing-page.module').then(m => m.LandingPageModule)
			},
			{
				path: 'operations',
				loadChildren: () => import('./operation-dashboard1/operation-dashboard1.module').then(m => m.OperationDashboard1Module)
			}
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

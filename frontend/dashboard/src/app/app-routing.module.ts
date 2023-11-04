import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { LayoutComponent } from './layout/layout.component';
import { SeaDashboardComponent } from './views/pages/sea-dashboard/sea-dashboard.component';

const routes: Routes = [
  
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  
  { path: 'login', component: LoginScreenComponent },
  
  {
		path: '',
		component: LayoutComponent,
		canActivate: [],
		children: [
			{
				path: 'dashboard',
				loadChildren: () => import('../app/views/pages/sea-dashboard/sea-dashboard.module').then(m => m.SeaDashboardModule)
			}
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

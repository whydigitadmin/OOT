// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Builder component
import { BuilderComponent } from './builder.component';

@NgModule({
	imports: [
		CommonModule,
		//PartialsModule,
		FormsModule,
		//MatTabsModule,
		//CoreModule,
		//PerfectScrollbarModule,
		//HighlightModule,
		RouterModule.forChild([
			{
				path: '',
				component: BuilderComponent
			}
		]),

		// ng-bootstrap modules
		//NgbTabsetModule,
	],
	providers: [],
	declarations: [BuilderComponent]
})
export class BuilderModule {
}

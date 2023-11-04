// Angular
import { Component, OnInit } from '@angular/core';
// Layout

// Object-Path
import * as objectPath from 'object-path';
import { LayoutConfigService } from 'src/app/service/layout-config.service';

@Component({
	selector: 'app-subheader',
	templateUrl: './subheader.component.html',
})
export class SubheaderComponent implements OnInit {
	// Public properties
	// subheader layout
	layout!: string;
	fluid!: boolean;
	clear!: boolean;

	/**
	 * Component constructor
	 *
	 * @param layoutConfigService: LayoutConfigService
	 */
	constructor(private layoutConfigService: LayoutConfigService) {
	}

	/**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

	/**
	 * On init
	 */
	ngOnInit(): void {
		const config = this.layoutConfigService.getConfig();

		this.layout = objectPath.get(config, 'subheader.layout');
		this.fluid = objectPath.get(config, 'footer.self.width') === 'fluid';
		this.clear = objectPath.get(config, 'subheader.clear');
	}
}

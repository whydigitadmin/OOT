// Angular
import { Component, OnInit } from '@angular/core';

import { HtmlClassService } from '../html-class.service';
import * as objectPath from 'object-path';
import { LayoutConfigService } from 'src/app/service/layout-config.service';
// Layout
//import { LayoutConfigServicepublic } from '../../../core/_base/layout';
// Object-Path


@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {
	// Public properties
	today: number = Date.now();
	
	fluid = true;
	headerLogo ="";
	headerStickyLogo = "";
	img_path: any = "assets/img/brand/shifsoft-logo.svg";
	img_height: any = "";
	img_width: any = "";
	txt_class: any = "";
	toggleOptions = {
		target: 'body',
		targetState: 'kt-aside--minimize',
		togglerState: 'kt-aside__brand-aside-toggler--active'
	};
	
	/**
	 * Component constructor
	 *
	 * @param layoutConfigService: LayouConfigService
	 * @param htmlClassService: HtmlClassService
	 */
	constructor(private layoutConfigService: LayoutConfigService ,public htmlClassService: HtmlClassService) {
	}

	/**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

	/**
	 * On init
	 */
	ngOnInit(): void {
		const config = this.layoutConfigService.getConfig();
		this.headerLogo = this.layoutConfigService.getLogo();
		this.headerStickyLogo = this.layoutConfigService.getStickyLogo();
		// footer width fluid
		this.fluid = objectPath.get(config, 'footer.self.width') === 'fluid';
	}
}

// Angular
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// Object-Path
import * as objectPath from 'object-path';
import { LayoutConfigService } from 'src/app/service/layout-config.service';
import { LoginScreenService } from 'src/app/service/login-screen.service';
// Layout


@Component({
	selector: 'app-login-screen-header',
	templateUrl: './login-screen-header.component.html',
	styleUrls: ['./login-screen-header.component.scss']
})
export class LoginScreenHeaderComponent implements OnInit {
	// Public proprties
	loaderLogo!: string;
	loaderType!: string;
	loaderMessage!: string;

	@ViewChild('LoginScreenHeader', { static: true })
	LoginScreen!: ElementRef;

	/**
	 * Component constructor
	 *
	 * @param el: ElementRef
	 * @param layoutConfigService: LayoutConfigService
	 * @param LoginScreenService: SplachScreenService
	 */
	constructor(
		private el: ElementRef,
		private layoutConfigService: LayoutConfigService,
		private LoginScreenService: LoginScreenService) {
	}

	/**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

	/**
	 * On init
	 */
	ngOnInit() {
		// init splash screen, see loader option in layout.config.ts
		const loaderConfig = this.layoutConfigService.getConfig('loader');
		this.loaderLogo = objectPath.get(loaderConfig, 'logo');
		this.loaderType = objectPath.get(loaderConfig, 'type');
		this.loaderMessage = objectPath.get(loaderConfig, 'message');

		this.LoginScreenService.init(this.LoginScreen);
	}
}

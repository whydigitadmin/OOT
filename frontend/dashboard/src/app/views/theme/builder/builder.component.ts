// Angular
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LayoutConfigModel } from 'src/app/model/layout-config.model';
import { LayoutConfigService } from 'src/app/service/layout-config.service';
// Layout


@Component({
	selector: 'app-builder',
	templateUrl: './builder.component.html',
	styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit {
	// Public properties
	model!: LayoutConfigModel;
	@ViewChild('form', { static: true })
	form!: NgForm;

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
		this.model = this.layoutConfigService.getConfig();
	}

	/**
	 * Reset preview
	 *
	 * @param e: Event
	 */
	resetPreview(e: Event): void {
		e.preventDefault();
		this.layoutConfigService.resetConfig();
		location.reload();
	}

	/**
	 * Submit preview
	 *
	 * @param e: Event
	 */
	submitPreview(e: Event): void {
		this.layoutConfigService.setConfig(this.model, true);
		location.reload();
	}
}

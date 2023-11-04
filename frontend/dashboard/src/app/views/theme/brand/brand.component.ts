// Angular
import { AfterViewInit, Component, OnInit } from '@angular/core';
// Layout

import { HtmlClassService } from '../html-class.service';
import { LayoutConfigService } from 'src/app/service/layout-config.service';

@Component({
	selector: 'app-brand',
	templateUrl: './brand.component.html',
})
export class BrandComponent implements OnInit, AfterViewInit {
	// Public properties
	headerLogo!: string;
	headerStickyLogo!: string;
	img_path: any = "";
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
	 * @param layoutConfigService: LayoutConfigService
	 * @param htmlClassService: HtmlClassService
	 */
	constructor(private layoutConfigService: LayoutConfigService, public htmlClassService: HtmlClassService) {
	}

	/**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

	/**
	 * On init
	 */
	ngOnInit(): void {
		this.load_img_info();
		//this.headerLogo = this.layoutConfigService.getLogo();
		this.headerStickyLogo = this.layoutConfigService.getStickyLogo();
	}

	/**
	 * On after view init
	 */
	ngAfterViewInit(): void {
	}


	load_img_info() {
		//	alert('p');
		const localstorage_item = JSON.parse(localStorage.getItem("ffsession") || '{}');
		console.log(localstorage_item.STFF_MCPY);
		localstorage_item.STFF_MCPY = "52";
		switch (localstorage_item.STFF_MCPY) {

			case '52':
				//	alert('ll');
				this.img_path = "assets/img/brand/shifsoft-logo.svg"
				this.img_height = "42";
				this.txt_class = "ss-crm-brname-st-2";
				break;

			case '104':

				//	alert('pp');
				this.img_path = "assets/img/brand/59 - GGL SINGAPORE.jpg"
				this.img_height = "42";
				this.txt_class = "ss-crm-brname-st-2";
				break;

			case '53':
				//	alert('pp');
				this.img_path = "assets/img/brand/53 - OECL MALAYSIA.jpg"
				this.img_height = "42";
				this.txt_class = "ss-crm-brname-st-2";
				break;
			case '54':
				//	alert('pp');
				this.img_path = "assets/img/brand/54 - GC SINGAPORE.jpg"
				this.img_height = "42";
				this.txt_class = "ss-crm-brname-st-2";
				break;
			case '55':
				//	alert('pp');
				this.img_path = "assets/img/brand/55 - OECL SINGAPORE.jpg"
				this.img_height = "42";
				this.txt_class = "ss-crm-brname-st-2";
				break;
			case '56':
				//	alert('pp');
				this.img_path = "assets/img/brand/56 - OECL INDIA.jpg"
				this.img_height = "42";
				this.txt_class = "ss-crm-brname-st-2";
				break;
			case '58':
				//	alert('pp');
				this.img_path = "assets/img/brand/58 - NAUTICAL.jpg"
				this.img_height = "42";
				this.txt_class = "ss-crm-brname-st-2";
				break;
			case '59':
				//	alert('pp');
				this.img_path = "assets/img/brand/59 - GGL SINGAPORE.jpg"
				this.img_height = "42";
				this.txt_class = "ss-crm-brname-st-2";
				break;
			case '61':
				//	alert('pp');
				this.img_path = "assets/img/brand/61 - CITYGEN.jpg"
				this.img_height = "42";
				this.txt_class = "ss-crm-brname-st-2";
				break;
			case '82':
				//	alert('pp');
				this.img_path = "assets/img/brand/82 - OECL THAILAND.jpg"
				this.img_height = "42";
				this.txt_class = "ss-crm-brname-st-2";
				break;
			case '83':
				//	alert('pp');
				this.img_path = "assets/img/brand/83 - One Global.jpg"
				this.img_height = "42";
				this.txt_class = "ss-crm-brname-st-2";
				break;
			case '87':
				//	alert('pp');
				this.img_path = "assets/img/brand/87 - GC MYANMAR.jpg"
				this.img_height = "42";
				this.txt_class = "ss-crm-brname-st-2";
				break;
			case '96':
				//	alert('pp');
				this.img_path = "assets/img/brand/96 - OECL JAKARTA.jpg"
				this.img_height = "42";
				this.txt_class = "ss-crm-brname-st-2";
				break;
			case '97':
				//	alert('pp');
				this.img_path = "assets/img/brand/97 - GC COLOMBO.jpg"
				this.img_height = "42";
				this.txt_class = "ss-crm-brname-st-2";
				break;
			case '101':
				//	alert('pp');
				this.img_path = "assets/img/brand/101 - GC PAKISTAN.jpg"
				this.img_height = "42";
				this.txt_class = "ss-crm-brname-st-2";
				break;

			case '113':
				//	alert('pp');
				this.img_path = "assets/img/brand/113 - RMA SHIPPING.jpg"
				this.img_height = "42";
				this.txt_class = "ss-crm-brname-st-2";
				break;
			case '186':
				//	alert('pp');
				this.img_path = "assets/img/brand/186 - MOLTECH ASIA.jpg"
				this.img_height = "42";
				this.txt_class = "ss-crm-brname-st-2";
				break;
			case '188':
				//	alert('pp');
				this.img_path = "assets/img/brand/188 - ONE GLOBAL.jpg"
				this.img_height = "42";
				this.txt_class = "ss-crm-brname-st-2";
				break;
			case '192':
				//	alert('pp');
				this.img_path = "assets/img/brand/192 - GGL USA.jpg"
				this.img_height = "42";
				this.txt_class = "ss-crm-brname-st-2";
				break;
			//   case '193':
			// 	//	alert('pp');
			// 		this.img_path = "assets/img/brand/GC-Logo.jpg"
			// 		this.img_height = "42";
			// 		this.txt_class = "ss-crm-brname-st-2";
			// 	  break;

			// 	  case '195':
			// 		//	alert('pp');
			// 			this.img_path = "assets/img/brand/GC-Logo.jpg"
			// 			this.img_height = "42";
			// 			this.txt_class = "ss-crm-brname-st-2";
			// 		  break;
			// 		  case '201':
			// 			//	alert('pp');
			// 				this.img_path = "assets/img/brand/GC-Logo.jpg"
			// 				this.img_height = "42";
			// 				this.txt_class = "ss-crm-brname-st-2";
			// 			  break;
			// 			  case '203':
			// 				//	alert('pp');
			// 					this.img_path = "assets/img/brand/GC-Logo.jpg"
			// 					this.img_height = "42";
			// 					this.txt_class = "ss-crm-brname-st-2";
			// 				  break;
			// 				  case '231':
			// 					//	alert('pp');
			// 						this.img_path = "assets/img/brand/GC-Logo.jpg"
			// 						this.img_height = "42";
			// 						this.txt_class = "ss-crm-brname-st-2";
			// 					  break;
			// 					  case '232':
			// 						//	alert('pp');
			// 							this.img_path = "assets/img/brand/GC-Logo.jpg"
			// 							this.img_height = "42";
			// 							this.txt_class = "ss-crm-brname-st-2";
			// 						  break;
			// 						  case '234':
			// 						//	alert('pp');
			// 							this.img_path = "assets/img/brand/GC-Logo.jpg"
			// 							this.img_height = "42";
			// 							this.txt_class = "ss-crm-brname-st-2";
			// 						  break;
			// 						  case '237':
			// 							//	alert('pp');
			// 								this.img_path = "assets/img/brand/GC-Logo.jpg"
			// 								this.img_height = "42";
			// 								this.txt_class = "ss-crm-brname-st-2";
			// 							  break;
			// 							  case '239':
			// 								//	alert('pp');
			// 									this.img_path = "assets/img/brand/GC-Logo.jpg"
			// 									this.img_height = "42";
			// 									this.txt_class = "ss-crm-brname-st-2";
			// 								  break;

		}
	}
}

// Angular
import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
	selector: 'app-topbar',
	templateUrl: './topbar.component.html',
	styleUrls: ['./topbar.component.scss'],
})



export class TopbarComponent { 

	openPopup(): void {
		const logoutPopup = document.getElementById('logoutPopup') as HTMLElement | null;
		if (logoutPopup) {
		  logoutPopup.style.display = 'block';
		}
	  }
	
	  performLogout(): void {
		// Implement your actual logout logic here
		this.closePopup();
	  }
	
	  private closePopup(): void {
		const logoutPopup = document.getElementById('logoutPopup') as HTMLElement | null;
		if (logoutPopup) {
		  logoutPopup.style.display = 'none';
		}
	  }
}

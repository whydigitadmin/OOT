import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {

  mini: boolean = true;
  
  constructor(private router: Router, private renderer: Renderer2, private el: ElementRef) { }

  toggleSidebar(): void {
    const mySidebar = this.el.nativeElement.querySelector('#mySidebar');
    const main = this.el.nativeElement.querySelector('#main');

    if (this.mini) {
      console.log('Opening sidebar');
      this.renderer.setStyle(mySidebar, 'width', '250px');
      this.renderer.setStyle(main, 'marginLeft', '250px');
      this.mini = false;
    } else {
      console.log('Closing sidebar');
      this.renderer.setStyle(mySidebar, 'width', '62px');
      this.renderer.setStyle(main, 'marginLeft', '70px');
      this.mini = true;
    }
  }

  testIn() {
    console.log('Hovering in sidebar');
  }

  testOut() {
    console.log('Hovering outside sidebar');
  }

}
import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logout-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logout-modal.component.html',
  styleUrls: ['./logout-modal.component.scss']
})
export class LogoutModalComponent {
  @Output() logoutConfirmed = new EventEmitter();

  closePopup() {
    this.logoutConfirmed.emit();
  }

  logout() {
    this.logoutConfirmed.emit();
    this.closePopup();
  }

}

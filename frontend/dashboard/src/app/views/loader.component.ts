import { Component } from '@angular/core';
@Component({
  selector: 'app-loader',
  template: `<div
    class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50"
  >
    <div
      class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-100"
    ></div>
  </div>`,
  styleUrls: ['./loader.component.scss'],
  standalone: true,
})
export class LoaderComponent {}
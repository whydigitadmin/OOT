import { Component, OnInit } from '@angular/core';
import { Globals } from './model/user-details.model';


@Component({
  selector: 'body[app-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private globals : Globals) {
    
  }

  ngOnInit(): void {
   
  }
  title = 'dashboard';


}

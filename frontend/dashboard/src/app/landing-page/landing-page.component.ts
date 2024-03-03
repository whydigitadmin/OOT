import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from 'src/app/model/user-details.model';
import { LoginService } from 'src/app/service/login.service';
import { JWTService } from '../service/JWTService.';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],

})
export class LandingPageComponent implements OnInit {
 


  constructor(private router: Router, private globals: Globals, private loginService: LoginService , private jwtService : JWTService) { }

  ngOnInit() {
    const token = this.jwtService.getDecodedToken(sessionStorage.getItem('details')!);
    console.log(token)
  }

  isProductMatching(product: string): any {

    const rolesString = sessionStorage.getItem('roles');
    const rolesArray = rolesString ? JSON.parse(rolesString) : [];
    return rolesArray.find((role: any) => role.productCode === product);

    //return this.globals.productRoles.find((role: any) => role.productCode === product);
      }
}


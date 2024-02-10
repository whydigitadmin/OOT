import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from 'src/app/model/user-details.model';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-landing-chart',
  templateUrl: './landing-chart.component.html',
  styleUrls: ['./landing-chart.component.scss']
})

export class LandingChartComponent implements OnInit {


  constructor(private router: Router, private globals: Globals, private loginService: LoginService) { }

  ngOnInit() {

  }

  isProductMatching(product: string): any {
    return this.globals.productRoles.find((role: any) => role.productCode === product);
    //return this.user_roles.forEach((role: any) => (role.roleId === roleId) ? console.log("isRoleMatching :", role.roleId) : console.log("isRoleMatching1 :", role.roleId));

  }
}



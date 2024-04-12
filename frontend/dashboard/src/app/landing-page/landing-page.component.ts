import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from 'src/app/model/user-details.model';
import { LoginService } from 'src/app/service/login.service';
import { JWTService } from '../service/JWTService.';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],

})
export class LandingPageComponent implements OnInit {
  selectedValue: string | undefined;
  companyIds: string[] = [];
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  constructor(private router: Router, private globals: Globals, private loginService: LoginService , private jwtService : JWTService) { }

  ngOnInit() {
    //const token = this.jwtService.getDecodedToken(sessionStorage.getItem('details')!);
    //console.log(token)
    console.log('landing page')
    console.log(this.globals.companyIds)
    console.log(this.globals.branchIds)
    this.companyIds = this.globals.companyIds;
    //this.selectedValue = 'steak-0'
  }

  onChangeCompany(){
    console.log('changecompany')
    console.log(this.selectedValue)
  }

  isProductMatching(product: string): any {

    const rolesString = sessionStorage.getItem('roles');
    const rolesArray = rolesString ? JSON.parse(rolesString) : [];
    return rolesArray.find((role: any) => role.productCode === product);

    //return this.globals.productRoles.find((role: any) => role.productCode === product);
      }
}


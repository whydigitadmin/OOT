import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Globals, branchIds } from 'src/app/model/user-details.model';
import { LoginService } from 'src/app/service/login.service';
import { JWTService } from '../service/JWTService.';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { SeaDashboardComponent } from '../views/pages/sea-dashboard/sea-dashboard.component';
import { SeaImportDashboardComponent } from '../views/pages/sea-import-dashboard/sea-import-dashboard.component';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],

})
export class LandingPageComponent implements OnInit {
  selectedValue: string | undefined;
  selectedCompany: string | '' | undefined;
  selectedBranch: string | undefined;
  companyIds: string[] = [];
  companyBranchIds: branchIds[] = [];
  companyBranchIds1: string[] = [];

  @ViewChild(SeaDashboardComponent) childSeaDashboardComponent: SeaDashboardComponent | undefined;
  @ViewChild(SeaImportDashboardComponent) childSeaImportDashboardComponent : SeaImportDashboardComponent | undefined;
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
    this.companyBranchIds = this.globals.userDetails.branchIds;
    this.companyBranchIds1 = this.companyBranchIds.filter(x => x.companyId == this.selectedCompany).map( x => {
      return x.branchId
    })
    console.log(this.companyBranchIds1)
  }

  onChangeBranch(){
      console.log("On Branch change.....")
      if (this.childSeaDashboardComponent) {
        console.log("childSeaDashboardComponent loadedd")
        this.childSeaDashboardComponent.loadAllItems1();
      } else {
        console.log("errorrrr childSeaDashboardComponent")
        console.error('Child childSeaDashboardComponent component is not available yet.');
      }
      
      if (this.childSeaImportDashboardComponent) {
        console.log("childSeaImportDashboardComponent loadedd")
        this.childSeaImportDashboardComponent.loadAllItems1();
      } else {
        console.log("errorrrr childSeaImportDashboardComponent")
        console.error('Child childSeaImportDashboardComponent component is not available yet.');
      }
  }
  isProductMatching(product: string): any {

    const rolesString = sessionStorage.getItem('roles');
    const rolesArray = rolesString ? JSON.parse(rolesString) : [];
    return rolesArray.find((role: any) => role.productCode === product);

    //return this.globals.productRoles.find((role: any) => role.productCode === product);
      }
}


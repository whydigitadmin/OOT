import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Globals, UserCompany, UserCompanyBranch } from 'src/app/model/user-details.model';
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
  selectedCompany!: number;
  selectedBranch!: number;
  companyIds: UserCompany[] = [];
  companyBranchIds: UserCompanyBranch[] = [];
  companyBranchIds1: UserCompanyBranch[] = [];
  loading!: boolean;

  @ViewChild(SeaDashboardComponent) childSeaDashboardComponent: SeaDashboardComponent | undefined;
  @ViewChild(SeaImportDashboardComponent) childSeaImportDashboardComponent : SeaImportDashboardComponent | undefined;
  constructor(private router: Router, private globals: Globals, private loginService: LoginService , private jwtService : JWTService, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {    
    this.companyIds = this.globals.companyIds;    
    this.selectedCompany = this.globals.selectedCompany;    
    this.selectedBranch = this.globals.selectedBranch;
    this.companyBranchIds = this.globals.branchIds;
    this.companyBranchIds1 = this.companyBranchIds.filter(x => x.companyId == this.selectedCompany).map( x => {
      return x
    });
    this.loading = true;     
  }

  ngAfterViewInit() {
    
    this.changeDetectorRef.detectChanges();
  }

  onChangeCompany(){
    console.log('changecompany: ', this.selectedCompany);
    this.globals.userDetails.selectedCompany = this.selectedCompany;
    this.companyBranchIds = this.globals.branchIds;
    this.companyBranchIds1 = this.companyBranchIds.filter(x => x.companyId == this.selectedCompany).map( x => {
      return x
    })
    console.log(this.companyBranchIds1)
  }

  onChangeBranch(){
    this.loading = true;
    this.globals.userDetails.selectedDepartment = this.selectedBranch;
      console.log("On Branch change.....")
      if (this.childSeaDashboardComponent) {        
        this.childSeaDashboardComponent.loadAllItems();
      }
      
      if (this.childSeaImportDashboardComponent) {        
        this.childSeaImportDashboardComponent.loadAllItems();
      }
      //this.loading = false;
  }

  setLoading(isLoading: boolean): void {
		// Implement your actual logout logic here
    
		this.loading = isLoading;
    console.log(" setLoading :", this.loading);
	  }

  isProductMatching(product: string): any {

    const rolesString = sessionStorage.getItem('roles');
    const rolesArray = rolesString ? JSON.parse(rolesString) : [];
    return rolesArray.find((role: any) => role.productCode === product);

    //return this.globals.productRoles.find((role: any) => role.productCode === product);
      }
}


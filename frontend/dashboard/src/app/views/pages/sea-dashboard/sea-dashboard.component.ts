import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivityService } from '../apps/service/activity.service';
import {Router} from '@angular/router';
import { MatAccordion } from '@angular/material/expansion';
import { Globals } from 'src/app/model/user-details.model';
import { LoginService } from 'src/app/service/login.service';
import { Export_LCL_CustomerService } from 'src/app/model/export-model';
@Component({
  selector: 'app-sea-dashboard',
  templateUrl: './sea-dashboard.component.html',
  styleUrls: ['./sea-dashboard.component.scss'],

})
export class SeaDashboardComponent implements OnInit {
  @ViewChild(MatAccordion)
  accordion!: MatAccordion;


datasource_export_LCL_CS : Export_LCL_CustomerService[]  = [];
datasource_export_FCL_CS : Export_LCL_CustomerService[]  = [];
dataSource = [
  { name: 'Unapproved Quotation', count: 25},
  { name: 'Approved Quotation List', count: 30 }  
];

dataSource1 = [
  { name: 'Approved Agent/Shipper Quotation', count: 25 },
  { name: 'New Nomination Routing Order', count: 40, countSLA: 20, countOSLA: 20 },  
  { name: 'Shipment Under Process', count: 33 },
];

dataSource2 = [
  { name: 'ENQ  LIST', count: 25, countSLA: 10, countOSLA: 15 },
  { name: 'Approved Quotations', count: 22 },  
  { name: 'New Nomination Routing Order', count: 45, countSLA: 10, countOSLA: 30 },
];

dataSource3 = [
  { name: 'Receipt of Shipping Instructions', count: 10 },
  { name: 'Pending HBL Drafts - (Ports assigned to dox staff)', count: 25, countSLA: 10, countOSLA: 15 },  
  { name: 'Pending HBL Drafts approval', count: 56, countSLA: 30, countOSLA: 26 },
];

displayedColumns: string[] = ['pendinActions', 'count'];

displayedColumnsSLA: string[] = ['pendinActions', 'count', 'countSLA', 'countOSLA'];

public localSession:any={};
user_roles: any;
roles_matching!: any;

  constructor(private avt_ser: ActivityService,private cdr: ChangeDetectorRef, private router: Router, private globals : Globals , private loginService: LoginService) { }

  ngOnInit() {
    
     this.localSession = localStorage.getItem('user_data'); 
    // console.log("localSession :", this.localSession);   
    this.user_roles = JSON.parse(this.localSession).productRoles;
    // console.log("user_roles :", this.user_roles);
    
    //this.search();
    this.loadAllItems();
}

isRoleMatching(roleId: number): any{  
  //return this.globals.productRoles.find((role: any) => role.roleId === roleId);
  return this.user_roles.find((role: any) => role.roleId === roleId);
  //return this.user_roles.forEach((role: any) => (role.roleId === roleId) ? console.log("isRoleMatching :", role.roleId) : console.log("isRoleMatching1 :", role.roleId));
  
}

loadAllItems(){
  this.get_export_lcl_Customer_Info();
  this.get_export_fcl_Customer_Info();
}

get_export_lcl_Customer_Info(){
  
  

  this.loginService.getExportLCLCustomerServiceInfo()
  .subscribe(
    (response) => {
      this.datasource_export_LCL_CS = response;
        // Handle the response data here
      console.log('Response:', this.datasource_export_LCL_CS );
    },
    (error) => {
      // Handle any errors here
      console.error('Error:', error);
    }
  );
}

get_export_fcl_Customer_Info(){
  
  

  this.loginService.getExportFCLCustomerServiceInfo()
  .subscribe(
    (response) => {
      this.datasource_export_FCL_CS = response;
        // Handle the response data here
      console.log('Response:', this.datasource_export_FCL_CS );
    },
    (error) => {
      // Handle any errors here
      console.error('Error:', error);
    }
  );
}

}


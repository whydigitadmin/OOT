import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';

import { Subject } from 'rxjs';
import { finalize, takeUntil, tap } from 'rxjs/operators';
import { ActivityService } from '../apps/service/activity.service';
import {MatGridListModule} from '@angular/material/grid-list';

//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {formatDate} from '@angular/common';
import {Router} from '@angular/router';
import { MatAccordion } from '@angular/material/expansion';
import { Globals } from 'src/app/model/user-details.model';
import { LoginService } from 'src/app/service/login.service';
import { Export_LCL_CustomerService } from 'src/app/model/export-model';
@Component({
  selector: 'kt-operation-dashboard',
  templateUrl: './sea-dashboard.component.html',
  styleUrls: ['./sea-dashboard.component.scss'],

})
export class SeaDashboardComponent implements OnInit {
  @ViewChild(MatAccordion)
  accordion!: MatAccordion;
search_update: string = 'N';
public data:any={};
shipment_list:any=[];
tempsearch:any=[];
//@ViewChild('lcl',{static: true}) public lcl: ModalDirective;
@Input() history_data: any={};

datasource_export_LCL_CS : Export_LCL_CustomerService[]  = [];
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

//@ViewChild(MatSort, {static: true}) sort: MatSort;
//@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
public localSession:any={};
user_roles: any;
  roles_matching!: any;

  constructor(private avt_ser: ActivityService,private cdr: ChangeDetectorRef, private router: Router, private globals : Globals , private loginService: LoginService) { }

  ngOnInit() {   

    console.log("I AM LOG OF METHOD")
    // this.localSession = localStorage.getItem('user_data'); 
    // console.log("localSession :", this.localSession);   
    // this.user_roles = JSON.parse(this.localSession).productRoles;
    // console.log("user_roles :", this.user_roles);
    
    //this.search();
    this.loadAllItems();
}

isRoleMatching(roleId: number): boolean{
  console.log("isRoleMatching :", this.user_roles);
  return this.user_roles.find((role: any) => role.roleId === roleId);
  //return this.user_roles.forEach((role: any) => (role.roleId === roleId) ? console.log("isRoleMatching :", role.roleId) : console.log("isRoleMatching1 :", role.roleId));
  
}
view(JSHP_RID: any){
  console.log(JSHP_RID);
   //this.modalService.dismissAll();
   this.tempsearch.close='CLOSE_LCL_EXPORT';
   localStorage.setItem('resultarray', JSON.stringify(this.tempsearch));
    console.log(this.tempsearch);
   console.log(JSON.parse(localStorage.getItem('resultarray')!));
   var url = '/Operations/operation-dashboard';
   localStorage.setItem('last_session_url_lcl_export',url)
   
   console.log(localStorage.getItem('roles'));
  this.router.navigate(['lcl-export-house/shipment-detail/' + JSHP_RID]);
}

loadAllItems(){
  this.get_export_lcl_Customer_Info();
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

export_fcl_CustomerService(){

}

}


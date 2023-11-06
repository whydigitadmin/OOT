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

  constructor(private avt_ser: ActivityService,private cdr: ChangeDetectorRef, private router: Router, private globals : Globals) { }

  ngOnInit() {   
    this.localSession = localStorage.getItem('user_data'); 
    console.log("localSession :", this.localSession);   
    this.user_roles = JSON.parse(this.localSession).productRoles;
    console.log("user_roles :", this.user_roles);
    
    this.search();
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
upload_hide(){
  //this.modalService.dismissAll();
  }
  change() {
    this.search_update = 'Y';
  }

  showChart(row: number) {

  }
  search(){
    // this.avt_ser.get_draft_count_data(this.data.from_date,this.data.to_date).subscribe((data: any) => {
    //         this.cdr.markForCheck();
    //         this.loader=false;
    //         this.draft_count=data.draft_count;
    //         this.SOB_count=data.SOB_count;
    //         this.cargo_count=data.cargo_count;
    //         this.BL_count=data.BL_count;
    //         this.invoice_count=data.invoice_count;
    //         this.sale_count=data.sale_count;
            
    //         this.draft_date_title=" Date range from " + this.data.from_date + " to " + this.data.to_date ;
    //       });
        }
  
        save(){

        }

        undo() {

        }

}


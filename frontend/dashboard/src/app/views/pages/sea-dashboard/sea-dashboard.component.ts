import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';

import { Subject } from 'rxjs';
import { finalize, takeUntil, tap } from 'rxjs/operators';
import { ActivityService } from '../apps/service/activity.service';

//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {formatDate} from '@angular/common';
import {Router} from '@angular/router';
@Component({
  selector: 'kt-operation-dashboard',
  templateUrl: './sea-dashboard.component.html',
  styleUrls: ['./sea-dashboard.component.scss']
})
export class SeaDashboardComponent implements OnInit {

search_update: string = 'N';
public data:any={};
shipment_list:any=[];
tempsearch:any=[];
//@ViewChild('lcl',{static: true}) public lcl: ModalDirective;
@Input() history_data: any={};

//@ViewChild(MatSort, {static: true}) sort: MatSort;
//@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
public localSession:any={};
//dataSource_lcl = new MatTableDataSource();
lcl_Columns: string[] = ['Action','JSHP_SHIPMENT_NO','JSHP_HOUSE_BILL_NO','JSHP_A_BOOKING_DATE','JSHP_E_DEPARTURE_DATE','JSHP_E_ARRIVAL_DATE','JSHP_MPRT_ORIGIN','JSHP_MPRT_DESTINATION','JSHP_ACTUAL_VOLUME','JSHP_ACTUAL_WEIGHT','JSHP_TOTAL_PACKAGE_COUNT','SHIPPER_NAME','CONSIGNEE_NAME'];
displayedColumns: string[] = ['Shipment No','HBL No','Booking Date','ETD','ETA','Origin','Destination','Volume','Weight','Package','Shipper','Consignee'];
  loader: boolean = false;
  session_company:any;
  search_load:any;
  len: any;
  draft_date_title:any='';
  draft_count: any='';
  SOB_count:any='';
  cargo_count:any='';
  BL_count:any='';
  invoice_count:any='';
  sale_count:any='';
  draft_data:any=[];
  list_page_name:any='';
  localstorage_item: any;
  constructor(private avt_ser: ActivityService,private cdr: ChangeDetectorRef, private router: Router) { }

  ngOnInit() {
   this.data.to_date=new Date();
   this.data.from_date = new Date(this.data.to_date.getTime() - 7*24*60*60*1000);
    let to_dateFormatted = formatDate(this.data.to_date, 'yyyy-MM-dd', 'en-US');
    let from_dateFormatted = formatDate(this.data.from_date, 'yyyy-MM-dd', 'en-US');
    console.log(this.data.from_date);
    console.log(this.data.to_date);
    this.loader = false;
    this.localstorage_item = JSON.parse(localStorage.getItem("ffsession")!);
    this.session_company = this.localstorage_item?.STFF_MCPY;
    this.search_load = "N";
    // this.modalService.open(this.shipment, {
    //   size: 'xl',
    //   backdrop: false,
    //   });
    this.search();
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
   localStorage.setItem('CLOSE_LCL',this.tempsearch.close);
  this.router.navigate(['lcl-export-house/shipment-detail/' + JSHP_RID]);
}
upload_hide(){
  //this.modalService.dismissAll();
  }
  change() {
    this.search_update = 'Y';
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
  

}


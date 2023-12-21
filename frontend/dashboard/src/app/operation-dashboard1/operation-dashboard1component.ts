// import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';

// import { ModalDirective } from 'ngx-bootstrap/modal';
// import { Subject } from 'rxjs';
// import Swal from 'sweetalert2';
// import { ActivityService } from '../views/pages/apps/service/activity.service';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { Router } from '@angular/router';
// import {formatDate} from '@angular/common';
// import { MatSort } from '@angular/material/sort';
// import { MatTableDataSource } from '@angular/material/table';
// import { MatPaginator } from '@angular/material/paginator';


// @Component({
//   selector: 'kt-operation-dashboard1',
//   templateUrl: './operation-dashboard1.component.html',
//   styleUrls: ['./operation-dashboard1.component.scss']
// })
// export class OperationDashboard1Component implements OnInit {
//   search_update: string = 'N';
//   public data:any={};
//   shipment_list:any=[];
//   tempsearch:any=[];
//   @ViewChild('fcl',{static: true}) public fcl: ModalDirective | undefined;
//   @Input() history_data: any={};
  
//   @ViewChild(MatSort, { static: true })
//   sort: MatSort = new MatSort;
//   @ViewChild(MatPaginator, { static: true })
//   paginator!: MatPaginator;
//   public localSession:any={};
//   private unsubscribe: Subject<any> | undefined;
//   dataSource_fcl = new MatTableDataSource();
//   hideFooter: boolean = false;
//   fcl_Columns: string[] = ['Action','JSHP_SHIPMENT_NO','JSHP_HOUSE_BILL_NO','JSHP_A_BOOKING_DATE','JSHP_E_DEPARTURE_DATE','JSHP_E_ARRIVAL_DATE','JSHP_MPRT_ORIGIN','JSHP_MPRT_DESTINATION','JSHP_ACTUAL_VOLUME','JSHP_ACTUAL_WEIGHT','JSHP_TOTAL_PACKAGE_COUNT','SHIPPER_NAME','CONSIGNEE_NAME'];
//   displayedColumns: string[] = ['Shipment No','HBL No','Booking Date','ETD','ETA','Origin','Destination','Volume','Weight','Package','Shipper','Consignee'];
//     loader: boolean = false;
//     session_company:any;
//     search_load:any;
//     len: any;
//     draft_date_title:any='';
//     draft1_count: any='';
//     SOB1_count:any='';
//     cargo1_count:any='';
//     BL1_count:any='';
//     invoice1_count:any='';
//     sale1_count:any='';
//     list_page_name:any='';
//   constructor(private avt_ser: ActivityService,private cdr: ChangeDetectorRef,   private modalService: NgbModal,private router: Router) { }

//   ngOnInit() {
//     this.data.to_date=new Date();
//    this.data.from_date = new Date(this.data.to_date.getTime() - 7*24*60*60*1000);
//     let to_dateFormatted = formatDate(this.data.to_date, 'yyyy-MM-dd', 'en-US');
//     let from_dateFormatted = formatDate(this.data.from_date, 'yyyy-MM-dd', 'en-US');
//     console.log(this.data.from_date);
//     console.log(this.data.to_date);
//     this.loader = false;
//     var localstorage_item = JSON.parse(localStorage.getItem("ffsession") || '{}');
//     this.session_company = localstorage_item.STFF_MCPY;
//     this.search_load = "N";
//     this.search();
//     // this.modalService.open(this.shipment, {
//     //   size: 'xl',
//     //   backdrop: false,
//     //   });
// }

// upload_hide(){
//   this.modalService.dismissAll();
//   }
//   change() {
//     this.search_update = 'Y';
//   }
//   view(JSHP_RID: string){
//     console.log(JSHP_RID);
//      this.modalService.dismissAll();
//      this.tempsearch.close='CLOSE_FCL_EXPORT';
//      localStorage.setItem('resultarray', JSON.stringify(this.tempsearch));
//       console.log(this.tempsearch);
//      console.log(JSON.parse(localStorage.getItem('resultarray') || '{}'));
//      var url = '/Operations/operation-dashboard1';
//      localStorage.setItem('last_session_url_fcl_export',url)
//      localStorage.setItem('CLOSE_FCL',this.tempsearch.close);
//     this.router.navigate(["fcl-exp/fcl-exp-houseentry/" + JSHP_RID]);
//   }
//   search(){
//     this.avt_ser.get_draft_count_data(this.data.from_date,this.data.to_date).subscribe(data => {
//             this.cdr.markForCheck();
//             this.loader=false;
//             this.draft1_count=data.draft1_count;
//             this.SOB1_count=data.SOB1_count;
//             this.cargo1_count=data.cargo1_count;
//             this.BL1_count=data.BL1_count;
//             this.invoice1_count=data.invoice1_count;
//             this.sale1_count=data.sale1_count;
//             // this.quote_data=data.quote_data;
//             // this.inv_data=data.inv_data;
//             // this.booking_data=data.booking_data;
//             // this.credit_data=data.credit_data;
//             // this.os_count=data.os_count;
//             // this.os_curr=data.os_curr;
//             // this.receipt_data=data.receipt_data;
//             // this.os_data_list=data.os_data_list;
//             // this.rec_count=data.rec_count;
//             this.draft_date_title=" Date range from " + this.data.from_date + " to " + this.data.to_date ;
//           });
//         }
//   public show(){
//     this.list_page_name = 'DRAFT BL NOT GENERATED';
//     console.log(this.localSession);
//   this.avt_ser.draft1(this.data.from_date,this.data.to_date).subscribe(data => {
//     if (data.status == 'ok') {
//       console.log(data);
//       this.modalService.open(this.fcl, {
//         size: 'xl',
//         backdrop: false,
//         });
//           this.cdr.markForCheck();
//             this.tempsearch = data.list_data;
//             this.shipment_list = this.tempsearch;
//             this.len = this.shipment_list.length;
//             this.dataSource_fcl = new MatTableDataSource(this.shipment_list);
//             this.dataSource_fcl = new MatTableDataSource();
//             this.dataSource_fcl.paginator = this.paginator;
//             this.dataSource_fcl.data = this.shipment_list;
//             console.log(this.dataSource_fcl.data);
//             this.dataSource_fcl.sort = this.sort;
//     }
//     else{
//       this.cdr.markForCheck()
//       this.loader = false;
//       this.shipment_list = [];
//       this.tempsearch=[];
//       this.len = 0;
//       Swal.fire({
//         icon: 'error',
//         text: 'no records found'
//       });
//       this.loader = false
//     }

//   });
// }
// public SOB(){
//   this.list_page_name = 'SOB NOT ENTERED';
//   console.log(this.localSession);
// this.avt_ser.SOB1(this.data.from_date,this.data.to_date).subscribe(data => {
//   if (data.status == 'ok') {
//     console.log(data);
//     this.modalService.open(this.fcl, {
//       size: 'xl',
//       backdrop: false,
//       });
//         this.cdr.markForCheck();
//           this.tempsearch = data.list_data;
//           this.shipment_list = this.tempsearch;
//           this.len = this.shipment_list.length;
//           this.dataSource_fcl = new MatTableDataSource(this.shipment_list);
//           this.dataSource_fcl = new MatTableDataSource();
//           this.dataSource_fcl.paginator = this.paginator;
//           this.dataSource_fcl.data = this.shipment_list;
//           console.log(this.dataSource_fcl.data);
//           this.dataSource_fcl.sort = this.sort;
//   }
//   else{
//     this.cdr.markForCheck()
//     this.loader = false;
//     this.shipment_list = [];
//     this.tempsearch=[];
//     this.len = 0;
//     Swal.fire({
//       icon: 'error',
//       text: 'no records found'
//     });
//     this.loader = false
//   }

// });
// }
// public cargo(){
//   this.list_page_name = 'CARGO_RECEIVED_DATE NOT ENTERED';
//   console.log(this.localSession);
// this.avt_ser.cargo1(this.data.from_date,this.data.to_date).subscribe(data => {
//   if (data.status == 'ok') {
//     console.log(data);
//     this.modalService.open(this.fcl, {
//       size: 'xl',
//       backdrop: false,
//       });
//         this.cdr.markForCheck();
//           this.tempsearch = data.list_data;
//           this.shipment_list = this.tempsearch;
//           this.len = this.shipment_list.length;
//           this.dataSource_fcl = new MatTableDataSource(this.shipment_list);
//           this.dataSource_fcl = new MatTableDataSource();
//           this.dataSource_fcl.paginator = this.paginator;
//           this.dataSource_fcl.data = this.shipment_list;
//           console.log(this.dataSource_fcl.data);
//           this.dataSource_fcl.sort = this.sort;
//   }
//   else{
//     this.cdr.markForCheck()
//     this.loader = false;
//     this.shipment_list = [];
//     this.tempsearch=[];
//     this.len = 0;
//     Swal.fire({
//       icon: 'error',
//       text: 'no records found'
//     });
//     this.loader = false
//   }

// });
// }
// public BL(){
//   this.list_page_name = 'BL NOT ENTERED';
//   console.log(this.localSession);
// this.avt_ser.BL1(this.data.from_date,this.data.to_date).subscribe(data => {
//   if (data.status == 'ok') {
//     console.log(data);
//     this.modalService.open(this.fcl, {
//       size: 'xl',
//       backdrop: false,
//       });
//         this.cdr.markForCheck();
//           this.tempsearch = data.list_data;
//           this.shipment_list = this.tempsearch;
//           this.len = this.shipment_list.length;
//           this.dataSource_fcl = new MatTableDataSource(this.shipment_list);
//           this.dataSource_fcl = new MatTableDataSource();
//           this.dataSource_fcl.paginator = this.paginator;
//           this.dataSource_fcl.data = this.shipment_list;
//           console.log(this.dataSource_fcl.data);
//           this.dataSource_fcl.sort = this.sort;
//   }
//   else{
//     this.cdr.markForCheck()
//     this.loader = false;
//     this.shipment_list = [];
//     this.tempsearch=[];
//     this.len = 0;
//     Swal.fire({
//       icon: 'error',
//       text: 'no records found'
//     });
//     this.loader = false
//   }

// });
// }
// public invoice(){
//   this.list_page_name = 'Invoice not raised';
//   console.log(this.localSession);
// this.avt_ser.invoice1(this.data.from_date,this.data.to_date).subscribe(data => {
//   if (data.status == 'ok') {
//     console.log(data);
//     this.modalService.open(this.fcl, {
//       size: 'xl',
//       backdrop: false,
//       });
//         this.cdr.markForCheck();
//           this.tempsearch = data.list_data;
//           this.shipment_list = this.tempsearch;
//           this.len = this.shipment_list.length;
//           this.dataSource_fcl = new MatTableDataSource(this.shipment_list);
//           this.dataSource_fcl = new MatTableDataSource();
//           this.dataSource_fcl.paginator = this.paginator;
//           this.dataSource_fcl.data = this.shipment_list;
//           console.log(this.dataSource_fcl.data);
//           this.dataSource_fcl.sort = this.sort;
//   }
//   else{
//     this.cdr.markForCheck()
//     this.loader = false;
//     this.shipment_list = [];
//     this.tempsearch=[];
//     this.len = 0;
//     Swal.fire({
//       icon: 'error',
//       text: 'no records found'
//     });
//     this.loader = false
//   }

// });
// }
// public sale(){
//   this.list_page_name = 'SALE CHARGE NOT ENTERED';
//   console.log(this.localSession);
// this.avt_ser.sale1(this.data.from_date,this.data.to_date).subscribe(data => {
//   if (data.status == 'ok') {
//     console.log(data);
//     this.modalService.open(this.fcl, {
//       size: 'xl',
//       backdrop: false,
//       });
//         this.cdr.markForCheck();
//           this.tempsearch = data.list_data;
//           this.shipment_list = this.tempsearch;
//           this.len = this.shipment_list.length;
//           this.dataSource_fcl = new MatTableDataSource(this.shipment_list);
//           this.dataSource_fcl = new MatTableDataSource();
//           this.dataSource_fcl.paginator = this.paginator;
//           this.dataSource_fcl.data = this.shipment_list;
//           console.log(this.dataSource_fcl.data);
//           this.dataSource_fcl.sort = this.sort;
//   }
//   else{
//     this.cdr.markForCheck()
//     this.loader = false;
//     this.shipment_list = [];
//     this.tempsearch=[];
//     this.len = 0;
//     Swal.fire({
//       icon: 'error',
//       text: 'no records found'
//     });
//     this.loader = false
//   }

// });
// }
// }
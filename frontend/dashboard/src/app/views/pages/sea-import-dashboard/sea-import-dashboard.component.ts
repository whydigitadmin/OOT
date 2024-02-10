import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivityService } from '../apps/service/activity.service';
import { Router } from '@angular/router';
import { MatAccordion } from '@angular/material/expansion';
import { Globals } from 'src/app/model/user-details.model';
import { LoginService } from 'src/app/service/login.service';
import { Export_LCL_CustomerService, Import_LCL_CustomerService } from 'src/app/model/export-model';
import { ImportLclCountReportComponent } from 'src/app/report/sea-import/import-lcl-report/import-lcl-count-report/import-lcl-count-report.component';
import { MatDialog } from '@angular/material/dialog';
import { ImportLclWithinslaReportComponent } from 'src/app/report/sea-import/import-lcl-report/import-lcl-withinsla-report/import-lcl-withinsla-report.component';
import { ImportLclOutofslaReportComponent } from 'src/app/report/sea-import/import-lcl-report/import-lcl-outofsla-report/import-lcl-outofsla-report.component';
import { ImportDocumentationCountReportComponent } from 'src/app/report/sea-import/import-documentation-report/import-documentation-count-report/import-documentation-count-report.component';
import { ImportDocumentationWithinslaReportComponent } from 'src/app/report/sea-import/import-documentation-report/import-documentation-withinsla-report/import-documentation-withinsla-report.component';
import { ImportDocumentationOutofslaReportComponent } from 'src/app/report/sea-import/import-documentation-report/import-documentation-outofsla-report/import-documentation-outofsla-report.component';
import { ImportSalesCountReportComponent } from 'src/app/report/sea-import/import-sales-support-report/import-sales-count-report/import-sales-count-report.component';
import { ImportTranshipmentDeskCountReportComponent } from 'src/app/report/sea-import/import-transhipmentDesk-report/import-transhipment-desk-count-report/import-transhipment-desk-count-report.component';
import { ImportTranshipmentDeskWithinslaReportComponent } from 'src/app/report/sea-import/import-transhipmentDesk-report/import-transhipment-desk-withinsla-report/import-transhipment-desk-withinsla-report.component';
import { ImportTranshipmentDeskOutofslaReportComponent } from 'src/app/report/sea-import/import-transhipmentDesk-report/import-transhipment-desk-outofsla-report/import-transhipment-desk-outofsla-report.component';
@Component({
  selector: 'app-sea-import-dashboard',
  templateUrl: './sea-import-dashboard.component.html',
  styleUrls: ['./sea-import-dashboard.component.scss'],

})
export class SeaImportDashboardComponent implements OnInit {
  @ViewChild(MatAccordion)
  accordion!: MatAccordion;

  datasource_import_Sales_Support_CS: Import_LCL_CustomerService[] = [];
  datasource_import_LCL_CS: Import_LCL_CustomerService[] = [];
  datasource_import_FCL_CS: Import_LCL_CustomerService[] = [];
  datasource_import_Documentation_CS: Import_LCL_CustomerService[] = [];
  datasource_import_transhipmentDesk_CS: Import_LCL_CustomerService[] = [];
  dataSource = [
    { name: 'Unapproved Quotation', count: 25 },
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

  dataSource4 = [
    { name: 'Pending for Export Vsl assigning', count: 10 },
    { name: 'Pending Export Consol mapping', count: 25, countSLA: 10, countOSLA: 15 },
    { name: 'Pending LOA release for Transhipment Shipments', count: 56, countSLA: 30, outofSLA: 26 },
  ];

  dataSource5 = [
    { name: 'Master Job Listing', count: 10 },
    { name: 'House Job Listing', count: 10 },
    { name: 'Approved Quotation', count: 10 },
    { name: 'Pending clearance docs verification', count: 25, countSLA: 10, outofSLA: 15 },
    { name: 'Pending Carrier payment', count: 25, countSLA: 10, outofSLA: 15 },
    { name: 'Pending D.O Collection', count: 56, countSLA: 30, outofSLA: 26 },
    { name: 'Pending Permit Declaration', count: 546, countSLA: 20, outofSLA: 216 },
    { name: 'Pending Trucking Order', count: 156, countSLA: 301, outofSLA: 261 },
    { name: 'Pending Full container Trucking', count: 556, countSLA: 330, outofSLA: 236 },
    { name: 'Pending unstuffing status', count: 5, countSLA: 3, outofSLA: 6 },
    { name: 'Pending return of MT container', count: 106, countSLA: 50, outofSLA: 20 },
    { name: 'Pending port charges update from trucker', count: 59, countSLA: 70, outofSLA: 556 },
    { name: 'Pending MS updates-TAB', count: 90, countSLA: 12, outofSLA: 97 },
    { name: 'Pending MS updates', count: 561, countSLA: 630, outofSLA: 266 },
  ];

  dataSource6 = [
    { name: 'Master Job Listing', count: 10 },
    { name: 'House Job Listing', count: 10 },
    { name: 'Approved Quotation', count: 10 },
    { name: 'Pending clearance docs verification', count: 25, countSLA: 10, outofSLA: 15 },
    { name: 'Pending Co-loader payment', count: 25, countSLA: 10, outofSLA: 15 },
    { name: 'Pending D.O Collection', count: 56, countSLA: 30, outofSLA: 26 },
    { name: 'Pending Permit Declaration', count: 546, countSLA: 20, outofSLA: 216 },
    { name: 'Pending Lcl Cartage Order', count: 156, countSLA: 301, outofSLA: 261 },
    { name: 'Pending unstuffing status', count: 556, countSLA: 330, outofSLA: 236 },
    { name: 'Pending LCL Trucking', count: 5, countSLA: 3, outofSLA: 6 },
    { name: 'Pending Storage Payment if any', count: 106, countSLA: 50, outofSLA: 20 },
    { name: 'Pending POD Copy', count: 59, countSLA: 70, outofSLA: 556 },
    { name: 'Pending MS updates-TAB', count: 90, countSLA: 12, outofSLA: 97 },
    { name: 'Pending MS updates', count: 561, countSLA: 630, outofSLA: 266 },
  ];

  displayedColumns: string[] = ['pendinActions', 'count'];

  displayedColumnsSLA: string[] = ['pendinActions', 'count', 'countSLA', 'countOSLA'];

  public localSession: any = {};
  user_roles: any;
  roles_matching!: any;

  constructor(private avt_ser: ActivityService, private cdr: ChangeDetectorRef, private router: Router, private globals: Globals, private loginService: LoginService, private dialog: MatDialog) { }

  ngOnInit() {

    //console.log("I AM LOG OF METHOD")
    this.localSession = localStorage.getItem('user_data');
    // console.log("localSession :", this.localSession);   
    this.user_roles = JSON.parse(this.localSession).productRoles;
    // console.log("user_roles :", this.user_roles);

    //this.search();
    this.loadAllItems();
  }

  isRoleMatching(roleId: number): any {
    //return this.globals.productRoles.find((role: any) => role.roleId === roleId);
    return this.user_roles.find((role: any) => role.roleId === roleId);
    //return this.user_roles.forEach((role: any) => (role.roleId === roleId) ? console.log("isRoleMatching :", role.roleId) : console.log("isRoleMatching1 :", role.roleId));

  }

  loadAllItems() {
    this.get_import_lcl_Customer_Info();
    this.get_import_fcl_Customer_Info();
    this.get_import_documentation_Customer_Info();
    this.get_import_sales_support_Customer_Info();
    this.get_import_transhipmentDesk_Customer_Info();
  }

  get_import_sales_support_Customer_Info() {

    this.loginService.getImportSalesSupportCustomerServiceInfo()
      .subscribe(
        (response) => {
          this.datasource_import_Sales_Support_CS = response;
          // Handle the response data here
          console.log('Response:', this.datasource_import_Sales_Support_CS);
        },
        (error) => {
          // Handle any errors here
          console.error('Error:', error);
        }
      );
  }

  get_import_lcl_Customer_Info() {

    this.loginService.getImportLCLCustomerServiceInfo()
      .subscribe(
        (response) => {
          this.datasource_import_LCL_CS = response;
          // Handle the response data here
          console.log('Response:', this.datasource_import_LCL_CS);
        },
        (error) => {
          // Handle any errors here
          console.error('Error:', error);
        }
      );
  }

  get_import_fcl_Customer_Info() {



    this.loginService.getImportFCLCustomerServiceInfo()
      .subscribe(
        (response) => {
          this.datasource_import_FCL_CS = response;
          // Handle the response data here
          console.log('Response:', this.datasource_import_FCL_CS);
        },
        (error) => {
          // Handle any errors here
          console.error('Error:', error);
        }
      );
  }

  get_import_documentation_Customer_Info() {



    this.loginService.getImportDocumentationCustomerServiceInfo()
      .subscribe(
        (response) => {
          this.datasource_import_transhipmentDesk_CS = response;
          // Handle the response data here
          console.log('Response:', this.datasource_import_transhipmentDesk_CS);
        },
        (error) => {
          // Handle any errors here
          console.error('Error:', error);
        }
      );
  }

  get_import_transhipmentDesk_Customer_Info() {

    this.loginService.getImportTranshipmentDeskCustomerServiceInfo()
      .subscribe(
        (response) => {
          this.datasource_import_Documentation_CS = response;
          // Handle the response data here
          console.log('Response:', this.datasource_import_Documentation_CS);
        },
        (error) => {
          // Handle any errors here
          console.error('Error:', error);
        }
      );
  }

  get_import_sales_support_details_navigation(action: string): void {
    const queryParams = {
      param1: action,
      // param2: 'value2'
      // Add more parameters as needed
    };

    const dialogRef = this.dialog.open(ImportSalesCountReportComponent, {
      width: '1200px',
      height: '500px',
      data: action,
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Handle any result or clean-up logic after the modal is closed
      console.log('Modal closed with result:', result);
    });

  }

  get_export_lcl_details_navigation(action: string): void {
    const queryParams = {
      param1: action,
      // param2: 'value2'
      // Add more parameters as needed
    };

    const dialogRef = this.dialog.open(ImportLclCountReportComponent, {
      width: '1200px',
      height: '500px',
      data: action,
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Handle any result or clean-up logic after the modal is closed
      console.log('Modal closed with result:', result);
    });

  }

  get_import_lcl_Count_details_navigation(action: string): void {
    const queryParams = {
      param1: action,
    };

    const dialogRef = this.dialog.open(ImportLclCountReportComponent, {
      width: '1200px',
      height: '500px',
      data: action,
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Handle any result or clean-up logic after the modal is closed
      console.log('Modal closed with result:', result);
    });

  }

  get_import_lcl_details_Withinsla_navigation(action: string, withinsla: string): void {
    console.log("pass", action, withinsla);

    const queryParams = {
      action: action,
      withinsla: 0,
    };

    const dialogRef = this.dialog.open(ImportLclWithinslaReportComponent, {
      width: '1200px',
      height: '500px',
      data: queryParams,
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Handle any result or clean-up logic after the modal is closed
      console.log('Modal closed with result:', result);
    });

  }

  get_import_lcl_details_OutOfSla_navigation(action: string, withinsla: string, outofsla: string): void {

    const queryParams = {
      action: action,
      withinsla: 0,
      outofsla: 0
    };

    const dialogRef = this.dialog.open(ImportLclOutofslaReportComponent, {
      width: '1200px',
      height: '500px',
      data: queryParams,
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Handle any result or clean-up logic after the modal is closed
      console.log('Modal closed with result:', result);
    });

  }

  get_import_documentation_Count_details_navigation(action: string): void {
    const queryParams = {
      param1: action,
    };

    const dialogRef = this.dialog.open(ImportDocumentationCountReportComponent, {
      width: '1200px',
      height: '500px',
      data: action,
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Handle any result or clean-up logic after the modal is closed
      console.log('Modal closed with result:', result);
    });

  }

  get_import_documentation_details_Withinsla_navigation(action: string, withinsla: string): void {
    console.log("pass", action, withinsla);

    const queryParams = {
      action: action,
      withinsla: 0,
    };

    const dialogRef = this.dialog.open(ImportDocumentationWithinslaReportComponent, {
      width: '1200px',
      height: '500px',
      data: queryParams,
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Handle any result or clean-up logic after the modal is closed
      console.log('Modal closed with result:', result);
    });

  }

  get_import_documentation_details_OutOfSla_navigation(action: string, withinsla: string, outofsla: string): void {

    const queryParams = {
      action: action,
      withinsla: 0,
      outofsla: 0
    };

    const dialogRef = this.dialog.open(ImportDocumentationOutofslaReportComponent, {
      width: '1200px',
      height: '500px',
      data: queryParams,
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Handle any result or clean-up logic after the modal is closed
      console.log('Modal closed with result:', result);
    });

  }

  get_import_transhipmentDesk_Count_details_navigation(action: string): void {
    const queryParams = {
      param1: action,
    };

    const dialogRef = this.dialog.open(ImportTranshipmentDeskCountReportComponent, {
      width: '1200px',
      height: '500px',
      data: action,
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Handle any result or clean-up logic after the modal is closed
      console.log('Modal closed with result:', result);
    });

  }

  get_import_transhipmentDesk_details_Withinsla_navigation(action: string, withinsla: string): void {
    console.log("pass", action, withinsla);

    const queryParams = {
      action: action,
      withinsla: 0,
    };

    const dialogRef = this.dialog.open(ImportTranshipmentDeskWithinslaReportComponent, {
      width: '1200px',
      height: '500px',
      data: queryParams,
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Handle any result or clean-up logic after the modal is closed
      console.log('Modal closed with result:', result);
    });

  }

  get_import_transhipmentDesk_details_OutOfSla_navigation(action: string, withinsla: string, outofsla: string): void {

    const queryParams = {
      action: action,
      withinsla: 0,
      outofsla: 0
    };

    const dialogRef = this.dialog.open(ImportTranshipmentDeskOutofslaReportComponent, {
      width: '1200px',
      height: '500px',
      data: queryParams,
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Handle any result or clean-up logic after the modal is closed
      console.log('Modal closed with result:', result);
    });

  }

}


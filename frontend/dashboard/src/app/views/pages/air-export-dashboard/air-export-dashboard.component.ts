import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivityService } from '../apps/service/activity.service';
import { Router } from '@angular/router';
import { MatAccordion } from '@angular/material/expansion';
import { Globals } from 'src/app/model/user-details.model';
import { LoginService } from 'src/app/service/login.service';
import { BsModalService } from 'ngx-bootstrap/modal'
import { MatDialog } from '@angular/material/dialog';
import { Air_Export_CustomerService, Export_LCL_CustomerService } from 'src/app/model/export-model';
import { AirExportSalesCountReportComponent } from 'src/app/report/air-export/export-sales-report/air-export-sales-count-report/air-export-sales-count-report.component';
import { AirExportDocumentationCountReportComponent } from 'src/app/report/air-export/export-air-documentation-report/air-export-documentation-count-report/air-export-documentation-count-report.component';
import { AirExportDocumentationWithinslaReportComponent } from 'src/app/report/air-export/export-air-documentation-report/air-export-documentation-withinsla-report/air-export-documentation-withinsla-report.component';
import { AirExportDocumentationOutofslaReportComponent } from 'src/app/report/air-export/export-air-documentation-report/air-export-documentation-outofsla-report/air-export-documentation-outofsla-report.component';
import { AirExportPlannerCountReportComponent } from 'src/app/report/air-export/export-air-planner-report/air-export-planner-count-report/air-export-planner-count-report.component';
import { AirExportPlannerWithinslaReportComponent } from 'src/app/report/air-export/export-air-planner-report/air-export-planner-withinsla-report/air-export-planner-withinsla-report.component';
import { AirExportPlannerOutofslaReportComponent } from 'src/app/report/air-export/export-air-planner-report/air-export-planner-outofsla-report/air-export-planner-outofsla-report.component';
import { AirExportCustomerCountReportComponent } from 'src/app/report/air-export/export-customer-report/air-export-customer-count-report/air-export-customer-count-report.component';
import { AirExportCustomerWithinslaReportComponent } from 'src/app/report/air-export/export-customer-report/air-export-customer-withinsla-report/air-export-customer-withinsla-report.component';
import { AirExportCustomerOutofslaReportComponent } from 'src/app/report/air-export/export-customer-report/air-export-customer-outofsla-report/air-export-customer-outofsla-report.component';
import { AirExportBlreleaseDeskCountReportComponent } from 'src/app/report/air-export/export-air-blreleaseDesk-report/air-export-blrelease-desk-count-report/air-export-blrelease-desk-count-report.component';
import { AirExportBlreleaseDeskWithinslaReportComponent } from 'src/app/report/air-export/export-air-blreleaseDesk-report/air-export-blrelease-desk-withinsla-report/air-export-blrelease-desk-withinsla-report.component';
import { AirExportBlreleaseDeskOutofslaReportComponent } from 'src/app/report/air-export/export-air-blreleaseDesk-report/air-export-blrelease-desk-outofsla-report/air-export-blrelease-desk-outofsla-report.component';


@Component({
  selector: 'app-air-export-dashboard',
  templateUrl: './air-export-dashboard.component.html',
  styleUrls: ['./air-export-dashboard.component.scss']
})

export class AirExportDashboardComponent implements OnInit {
  @ViewChild(MatAccordion)
  accordion!: MatAccordion;
  datasource_air_export_CS: Air_Export_CustomerService[] = [];
  datasource_air_export_sales: Air_Export_CustomerService[] = [];
  datasource_air_export_documentation: Air_Export_CustomerService[] = [];
  datasource_air_export_planner: Air_Export_CustomerService[] = [];
  datasource_air_export_blreleaseDesk: Air_Export_CustomerService[] = [];


  dataSource = [
    { name: 'Unapproved Quotation', count: 25 },
    { name: 'Approved Quotation List (Booking Order)', count: 30 }
  ];

  dataSource1 = [
    { action: 'Approved Agent/Shipper Quotation ', count: 25 },
    { action: 'New Nomination Routing Order / New Booking from SHPR', count: 40, withinSLA: 20, outofSLA: 20 },
    { action: 'Pending Carrier Booking', count: 30, withinSLA: 210, outofSLA: 201 },
    { action: 'Pending Flight details update', count: 402, withinSLA: 420, outofSLA: 220 },
    { action: 'Master Job Creation / Listing', count: 45 },
    { action: 'Shipment Under Process', count: 90 },
    { action: 'Pending Cargo Pickup', count: 91, withinSLA: 100, outofSLA: 209 },
    { action: 'Pending Cargo receipt', count: 41, withinSLA: 290, outofSLA: 920 },
    { action: 'Pending DG application(If applicable)', count: 56, withinSLA: 90, outofSLA: 10 },
    { action: 'Pending DG approval(If applicable)', count: 540, withinSLA: 205, outofSLA: 250 },
    { action: 'Pending Export Customs Filing', count: 640, withinSLA: 260, outofSLA: 206 },
    { action: 'Pending MS updates-TAB', count: 40, withinSLA: 210, outofSLA: 46 },
  ];

  dataSource2 = [
    { action: 'Receipt of Shipping Instructions(SLI)', count: 25 },
    { action: 'Pending HAWB Drafts', count: 40, withinSLA: 20, outofSLA: 20 },
    { action: 'Pending HAWB Drafts approval', count: 30, withinSLA: 210, outofSLA: 201 },
    { action: 'Pending for Carrier Cost Entry', count: 402, withinSLA: 420, outofSLA: 220 },
    { action: 'Pending for Transporter Cost Entry', count: 45 },
    { action: 'Pending for other vendor cost entry', count: 90 },
    { action: 'Pending Carrier Payment', count: 91, withinSLA: 100, outofSLA: 209 },
    { action: 'Pending for Overseas Invoice', count: 41, withinSLA: 290, outofSLA: 920 },
    { action: 'Pending for Local Sales Invoice', count: 56, withinSLA: 90, outofSLA: 10 },
    { action: 'Pending MAWB / HAWB print', count: 540, withinSLA: 205, outofSLA: 250 },
    { action: 'Pending Pre-alert to destination agent', count: 640, withinSLA: 260, outofSLA: 206 },
    { action: 'Pending Post Shipment documents to SHPR', count: 40, withinSLA: 210, outofSLA: 46 },
    { action: 'Pending DOC Completion', count: 140, withinSLA: 20, outofSLA: 461 },
  ];

  dataSource3 = [
    { name: 'Receipt of Shipping Instructions', count: 10 },
    { name: 'Pending HBL Drafts - (Ports assigned to dox staff)', count: 25, countSLA: 10, countOSLA: 15 },
    { name: 'Pending HBL Drafts approval', count: 56, countSLA: 30, countOSLA: 26 },
  ];

  dataSource4 = [
    { name: 'Receipt of Shipping Instructions', count: 10 },
    { name: 'Pending HBL Drafts - (Ports assigned to dox staff)', count: 25, countSLA: 10, countOSLA: 15 },
    { name: 'Pending HBL Drafts approval', count: 56, countSLA: 30, countOSLA: 26 },
  ];

  displayedColumns: string[] = ['pendinActions', 'count'];

  displayedColumnsSLA: string[] = ['pendinActions', 'count', 'countSLA', 'countOSLA'];

  public localSession: any = {};
  user_roles: any;
  roles_matching!: any;

  constructor(private avt_ser: ActivityService, private cdr: ChangeDetectorRef, private router: Router, private globals: Globals, private loginService: LoginService, private modal: BsModalService, private dialog: MatDialog) { }

  ngOnInit() {
    this.localSession = localStorage.getItem('user_data');
    this.user_roles = JSON.parse(this.localSession).productRoles;
    this.loadAllItems();
  }

  isRoleMatching(roleId: number): any {
    //return this.globals.productRoles.find((role: any) => role.roleId === roleId);
    return this.globals.productRoles.find((role: any) => role.roleId === roleId);
    //return this.user_roles.forEach((role: any) => (role.roleId === roleId) ? console.log("isRoleMatching :", role.roleId) : console.log("isRoleMatching1 :", role.roleId));

  }

  loadAllItems() {
    this.get_air_export_customer_service_Info();
    this.get_air_export_sales_service_Info();
    this.get_air_export_documentation_service_Info();
    this.get_air_export_planner_service_Info();
    this.get_air_export_BlreleaseDesk_service_Info();
  }

  get_air_export_sales_support_details_navigation(action: string): void {
    const queryParams = {
      param1: action,
      // param2: 'value2'
      // Add more parameters as needed
    };

    const dialogRef = this.dialog.open(AirExportSalesCountReportComponent, {
      width: '1200px',
      height: '500px',
      data: action,
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Handle any result or clean-up logic after the modal is closed
      console.log('Modal closed with result:', result);
    });

  }


  get_air_export_documentation_details_navigation(action: string): void {
    const queryParams = {
      param1: action,
      // param2: 'value2'
      // Add more parameters as needed
    };

    const dialogRef = this.dialog.open(AirExportDocumentationCountReportComponent, {
      width: '1200px',
      height: '500px',
      data: action,
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Handle any result or clean-up logic after the modal is closed
      console.log('Modal closed with result:', result);
    });

  }

  get_air_export_documentation_withinsla_details_navigation(action: string, withinsla: string): void {
    console.log("pass", action, withinsla);

    const queryParams = {
      action: action,
      withinsla: 0,
    };

    const dialogRef = this.dialog.open(AirExportDocumentationWithinslaReportComponent, {
      width: '1200px',
      height: '500px',
      data: queryParams,
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Handle any result or clean-up logic after the modal is closed
      console.log('Modal closed with result:', result);
    });

  }

  get_air_export_documentation_Outofsla_details_navigation(action: string, withinsla: string, outofsla: string): void {

    const queryParams = {
      action: action,
      withinsla: 0,
      outofsla: 0
    };

    const dialogRef = this.dialog.open(AirExportDocumentationOutofslaReportComponent, {
      width: '1200px',
      height: '500px',
      data: queryParams,
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Handle any result or clean-up logic after the modal is closed
      console.log('Modal closed with result:', result);
    });

  }

  get_air_export_planner_details_navigation(action: string): void {
    const queryParams = {
      param1: action,
      // param2: 'value2'
      // Add more parameters as needed
    };

    const dialogRef = this.dialog.open(AirExportPlannerCountReportComponent, {
      width: '1200px',
      height: '500px',
      data: action,
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Handle any result or clean-up logic after the modal is closed
      console.log('Modal closed with result:', result);
    });

  }

  get_air_export_planner_withinsla_details_navigation(action: string, withinsla: string): void {
    console.log("pass", action, withinsla);

    const queryParams = {
      action: action,
      withinsla: 0,
    };

    const dialogRef = this.dialog.open(AirExportPlannerWithinslaReportComponent, {
      width: '1200px',
      height: '500px',
      data: queryParams,
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Handle any result or clean-up logic after the modal is closed
      console.log('Modal closed with result:', result);
    });

  }

  get_air_export_planner_Outofsla_details_navigation(action: string, withinsla: string, outofsla: string): void {

    const queryParams = {
      action: action,
      withinsla: 0,
      outofsla: 0
    };

    const dialogRef = this.dialog.open(AirExportPlannerOutofslaReportComponent, {
      width: '1200px',
      height: '500px',
      data: queryParams,
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Handle any result or clean-up logic after the modal is closed
      console.log('Modal closed with result:', result);
    });

  }

  get_air_export_customerService_details_navigation(action: string): void {
    const queryParams = {
      param1: action,
      // param2: 'value2'
      // Add more parameters as needed
    };

    const dialogRef = this.dialog.open(AirExportCustomerCountReportComponent, {
      width: '1200px',
      height: '500px',
      data: action,
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Handle any result or clean-up logic after the modal is closed
      console.log('Modal closed with result:', result);
    });

  }

  get_air_export_customerService_withinsla_details_navigation(action: string, withinsla: string): void {
    console.log("pass", action, withinsla);

    const queryParams = {
      action: action,
      withinsla: 0,
    };

    const dialogRef = this.dialog.open(AirExportCustomerWithinslaReportComponent, {
      width: '1200px',
      height: '500px',
      data: queryParams,
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Handle any result or clean-up logic after the modal is closed
      console.log('Modal closed with result:', result);
    });

  }

  get_air_export_customerService_Outofsla_details_navigation(action: string, withinsla: string, outofsla: string): void {

    const queryParams = {
      action: action,
      withinsla: 0,
      outofsla: 0
    };

    const dialogRef = this.dialog.open(AirExportCustomerOutofslaReportComponent, {
      width: '1200px',
      height: '500px',
      data: queryParams,
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Handle any result or clean-up logic after the modal is closed
      console.log('Modal closed with result:', result);
    });

  }

  get_air_export_blrealeaseDesk_Count_details_navigation(action: string): void {
    const queryParams = {
      param1: action,
    };

    const dialogRef = this.dialog.open(AirExportBlreleaseDeskCountReportComponent, {
      width: '1200px',
      height: '500px',
      data: action,
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Handle any result or clean-up logic after the modal is closed
      console.log('Modal closed with result:', result);
    });

  }

  get_air_export_blrealeaseDesk_details_Withinsla_navigation(action: string, withinsla: string): void {
    console.log("pass", action, withinsla);

    const queryParams = {
      action: action,
      withinsla: 0,
    };

    const dialogRef = this.dialog.open(AirExportBlreleaseDeskWithinslaReportComponent, {
      width: '1200px',
      height: '500px',
      data: queryParams,
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Handle any result or clean-up logic after the modal is closed
      console.log('Modal closed with result:', result);
    });

  }

  get_air_export_blrealeaseDesk_details_OutOfSla_navigation(action: string, withinsla: string, outofsla: string): void {

    const queryParams = {
      action: action,
      withinsla: 0,
      outofsla: 0
    };

    const dialogRef = this.dialog.open(AirExportBlreleaseDeskOutofslaReportComponent, {
      width: '1200px',
      height: '500px',
      data: queryParams,
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Handle any result or clean-up logic after the modal is closed
      console.log('Modal closed with result:', result);
    });

  }


  get_air_export_customer_service_Info() {
    console.log("mani")
    this.loginService.getAirExportCsCustomerServiceInfo()
      .subscribe(
        (response) => {
          this.datasource_air_export_CS = response;
          // Handle the response data here
          console.log('Response:', this.datasource_air_export_CS);
        },
        (error) => {
          // Handle any errors here
          console.error('Error:', error);
        }
      );
  }

  get_air_export_sales_service_Info() {
    console.log("mani")
    this.loginService.getAirExportSalesCustomerServiceInfo()
      .subscribe(
        (response) => {
          this.datasource_air_export_sales = response;
          // Handle the response data here
          console.log('Response:', this.datasource_air_export_sales);
        },
        (error) => {
          // Handle any errors here
          console.error('Error:', error);
        }
      );
  }

  get_air_export_documentation_service_Info() {
    console.log("mani")
    this.loginService.getAirExportDocumentationCustomerServiceInfo()
      .subscribe(
        (response) => {
          this.datasource_air_export_documentation = response;
          // Handle the response data here
          console.log('Response:', this.datasource_air_export_documentation);
        },
        (error) => {
          // Handle any errors here
          console.error('Error:', error);
        }
      );
  }

  get_air_export_planner_service_Info() {
    console.log("mani")
    this.loginService.getAirExportPlannerCustomerServiceInfo()
      .subscribe(
        (response) => {
          this.datasource_air_export_planner = response;
          // Handle the response data here
          console.log('Response:', this.datasource_air_export_planner);
        },
        (error) => {
          // Handle any errors here
          console.error('Error:', error);
        }
      );
  }

  get_air_export_BlreleaseDesk_service_Info() {
    console.log("mani")
    this.loginService.getAirExportBlreleaseDeskCustomerServiceInfo()
      .subscribe(
        (response) => {
          this.datasource_air_export_blreleaseDesk = response;
          // Handle the response data here
          console.log('Response:', this.datasource_air_export_blreleaseDesk);
        },
        (error) => {
          // Handle any errors here
          console.error('Error:', error);
        }
      );
  }

}



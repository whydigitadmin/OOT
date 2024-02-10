import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivityService } from '../apps/service/activity.service';
import { Router } from '@angular/router';
import { MatAccordion } from '@angular/material/expansion';
import { Globals } from 'src/app/model/user-details.model';
import { LoginService } from 'src/app/service/login.service';
import { BsModalService } from 'ngx-bootstrap/modal'
import { MatDialog } from '@angular/material/dialog';
import { Air_Import_CustomerService } from 'src/app/model/export-model';
import { AirImportSalesSupportCountReportComponent } from 'src/app/report/air-import/air-import-sales-support-report/air-import-sales-support-count-report/air-import-sales-support-count-report.component';
import { AirImportCustomerServiceCountReportComponent } from 'src/app/report/air-import/air-import-customer-service-report/air-import-customer-service-count-report/air-import-customer-service-count-report.component';
import { AirImportCustomerServiceWithinslaReportComponent } from 'src/app/report/air-import/air-import-customer-service-report/air-import-customer-service-withinsla-report/air-import-customer-service-withinsla-report.component';
import { AirImportCustomerServiceOutofslaReportComponent } from 'src/app/report/air-import/air-import-customer-service-report/air-import-customer-service-outofsla-report/air-import-customer-service-outofsla-report.component';
import { AirImportDocumentationCountReportComponent } from 'src/app/report/air-import/air-import-documentation-report/air-import-documentation-count-report/air-import-documentation-count-report.component';
import { AirImportDocumentationWithinslaReportComponent } from 'src/app/report/air-import/air-import-documentation-report/air-import-documentation-withinsla-report/air-import-documentation-withinsla-report.component';
import { AirImportDocumentationOutofslaReportComponent } from 'src/app/report/air-import/air-import-documentation-report/air-import-documentation-outofsla-report/air-import-documentation-outofsla-report.component';
import { AirImportTranshipmentDeskCountReportComponent } from 'src/app/report/air-import/air-import-transhipmentDesk-report/air-import-transhipment-desk-count-report/air-import-transhipment-desk-count-report.component';
import { AirImportTranshipmentDeskWithinslaReportComponent } from 'src/app/report/air-import/air-import-transhipmentDesk-report/air-import-transhipment-desk-withinsla-report/air-import-transhipment-desk-withinsla-report.component';
import { AirImportTranshipmentDeskOutofslaReportComponent } from 'src/app/report/air-import/air-import-transhipmentDesk-report/air-import-transhipment-desk-outofsla-report/air-import-transhipment-desk-outofsla-report.component';

@Component({
  selector: 'app-air-import-dashboard',
  templateUrl: './air-import-dashboard.component.html',
  styleUrls: ['./air-import-dashboard.component.scss']
})

export class AirImportDashboardComponent implements OnInit {
  @ViewChild(MatAccordion)
  accordion!: MatAccordion;
  datasource_air_import_sales: Air_Import_CustomerService[] = [];
  datasource_air_import_cs: Air_Import_CustomerService[] = [];
  datasource_air_import_documentation: Air_Import_CustomerService[] = [];
  datasource_air_import_transhipmentDesk: Air_Import_CustomerService[] = [];

  dataSource1 = [
    { action: 'Approved Agent/Shipper Quotation', count: 25, withinSLA: 2, outofSLA: 10 },
    { action: 'New Nomination Routing Order', count: 40, withinSLA: 20, outofSLA: 20 },
    { action: 'Shipment Under Process', count: 33, withinSLA: 1, outofSLA: 80 },
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
    return this.user_roles.find((role: any) => role.roleId === roleId);
    //return this.user_roles.forEach((role: any) => (role.roleId === roleId) ? console.log("isRoleMatching :", role.roleId) : console.log("isRoleMatching1 :", role.roleId));

  }

  loadAllItems() {
    this.get_air_import_sales_service_Info();
    this.get_air_import_Cs_service_Info();
    this.get_air_import_documentation_service_Info();
    this.get_air_import_transhipmentDesk_service_Info();
  }

  get_air_import_sales_support_details_navigation(action: string): void {
    const queryParams = {
      param1: action,
      // param2: 'value2'
      // Add more parameters as needed
    };

    const dialogRef = this.dialog.open(AirImportSalesSupportCountReportComponent, {
      width: '1200px',
      height: '500px',
      data: action,
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Handle any result or clean-up logic after the modal is closed
      console.log('Modal closed with result:', result);
    });

  }

  get_air_import_customerService_details_navigation(action: string): void {
    const queryParams = {
      param1: action,
      // param2: 'value2'
      // Add more parameters as needed
    };

    const dialogRef = this.dialog.open(AirImportCustomerServiceCountReportComponent, {
      width: '1200px',
      height: '500px',
      data: action,
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Handle any result or clean-up logic after the modal is closed
      console.log('Modal closed with result:', result);
    });

  }

  get_air_import_customerService_withinsla_details_navigation(action: string, withinsla: string): void {
    console.log("pass", action, withinsla);

    const queryParams = {
      action: action,
      withinsla: 0,
    };

    const dialogRef = this.dialog.open(AirImportCustomerServiceWithinslaReportComponent, {
      width: '1200px',
      height: '500px',
      data: queryParams,
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Handle any result or clean-up logic after the modal is closed
      console.log('Modal closed with result:', result);
    });

  }

  get_air_import_customerService_Outofsla_details_navigation(action: string, withinsla: string, outofsla: string): void {

    const queryParams = {
      action: action,
      withinsla: 0,
      outofsla: 0
    };

    const dialogRef = this.dialog.open(AirImportCustomerServiceOutofslaReportComponent, {
      width: '1200px',
      height: '500px',
      data: queryParams,
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Handle any result or clean-up logic after the modal is closed
      console.log('Modal closed with result:', result);
    });

  }

  get_air_import_documentation_details_navigation(action: string): void {
    const queryParams = {
      param1: action,
      // param2: 'value2'
      // Add more parameters as needed
    };

    const dialogRef = this.dialog.open(AirImportDocumentationCountReportComponent, {
      width: '1200px',
      height: '500px',
      data: action,
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Handle any result or clean-up logic after the modal is closed
      console.log('Modal closed with result:', result);
    });

  }

  get_air_import_documentation_withinsla_details_navigation(action: string, withinsla: string): void {
    console.log("pass", action, withinsla);

    const queryParams = {
      action: action,
      withinsla: 0,
    };

    const dialogRef = this.dialog.open(AirImportDocumentationWithinslaReportComponent, {
      width: '1200px',
      height: '500px',
      data: queryParams,
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Handle any result or clean-up logic after the modal is closed
      console.log('Modal closed with result:', result);
    });

  }

  get_air_import_documentation_Outofsla_details_navigation(action: string, withinsla: string, outofsla: string): void {

    const queryParams = {
      action: action,
      withinsla: 0,
      outofsla: 0
    };

    const dialogRef = this.dialog.open(AirImportDocumentationOutofslaReportComponent, {
      width: '1200px',
      height: '500px',
      data: queryParams,
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Handle any result or clean-up logic after the modal is closed
      console.log('Modal closed with result:', result);
    });

  }

  get_air_import_transhipmentDesk_Count_details_navigation(action: string): void {
    const queryParams = {
      param1: action,
    };

    const dialogRef = this.dialog.open(AirImportTranshipmentDeskCountReportComponent, {
      width: '1200px',
      height: '500px',
      data: action,
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Handle any result or clean-up logic after the modal is closed
      console.log('Modal closed with result:', result);
    });

  }

  get_air_import_transhipmentDesk_details_Withinsla_navigation(action: string, withinsla: string): void {
    console.log("pass", action, withinsla);

    const queryParams = {
      action: action,
      withinsla: 0,
    };

    const dialogRef = this.dialog.open(AirImportTranshipmentDeskWithinslaReportComponent, {
      width: '1200px',
      height: '500px',
      data: queryParams,
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Handle any result or clean-up logic after the modal is closed
      console.log('Modal closed with result:', result);
    });

  }

  get_air_import_transhipmentDesk_details_OutOfSla_navigation(action: string, withinsla: string, outofsla: string): void {

    const queryParams = {
      action: action,
      withinsla: 0,
      outofsla: 0
    };

    const dialogRef = this.dialog.open(AirImportTranshipmentDeskOutofslaReportComponent, {
      width: '1200px',
      height: '500px',
      data: queryParams,
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Handle any result or clean-up logic after the modal is closed
      console.log('Modal closed with result:', result);
    });

  }

  get_air_import_sales_service_Info() {
    console.log("mani")
    this.loginService.getAirImportSalesCustomerServiceInfo()
      .subscribe(
        (response) => {
          this.datasource_air_import_sales = response;
          // Handle the response data here
          console.log('Response:', this.datasource_air_import_sales);
        },
        (error) => {
          // Handle any errors here
          console.error('Error:', error);
        }
      );
  }

  get_air_import_Cs_service_Info() {
    console.log("mani")
    this.loginService.getAirImportCSCustomerServiceInfo()
      .subscribe(
        (response) => {
          this.datasource_air_import_cs = response;
          // Handle the response data here
          console.log('Response:', this.datasource_air_import_cs);
        },
        (error) => {
          // Handle any errors here
          console.error('Error:', error);
        }
      );
  }

  get_air_import_documentation_service_Info() {
    console.log("mani")
    this.loginService.getAirImportDocumentationCustomerServiceInfo()
      .subscribe(
        (response) => {
          this.datasource_air_import_documentation = response;
          // Handle the response data here
          console.log('Response:', this.datasource_air_import_documentation);
        },
        (error) => {
          // Handle any errors here
          console.error('Error:', error);
        }
      );
  }

  get_air_import_transhipmentDesk_service_Info() {
    console.log("mani")
    this.loginService.getAirImportTranshipmentDeskCustomerServiceInfo()
      .subscribe(
        (response) => {
          this.datasource_air_import_transhipmentDesk = response;
          // Handle the response data here
          console.log('Response:', this.datasource_air_import_transhipmentDesk);
        },
        (error) => {
          // Handle any errors here
          console.error('Error:', error);
        }
      );
  }

}


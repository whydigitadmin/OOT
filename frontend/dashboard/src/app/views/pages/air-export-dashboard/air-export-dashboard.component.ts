import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivityService } from '../apps/service/activity.service';
import { Router } from '@angular/router';
import { MatAccordion } from '@angular/material/expansion';
import { Globals } from 'src/app/model/user-details.model';
import { LoginService } from 'src/app/service/login.service';
import { BsModalService } from 'ngx-bootstrap/modal'
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-air-export-dashboard',
  templateUrl: './air-export-dashboard.component.html',
  styleUrls: ['./air-export-dashboard.component.scss']
})

export class AirExportDashboardComponent implements OnInit {
  @ViewChild(MatAccordion)
  accordion!: MatAccordion;

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

  displayedColumns: string[] = ['pendinActions', 'count'];

  displayedColumnsSLA: string[] = ['pendinActions', 'count', 'countSLA', 'countOSLA'];

  public localSession: any = {};
  user_roles: any;
  roles_matching!: any;

  constructor(private avt_ser: ActivityService, private cdr: ChangeDetectorRef, private router: Router, private globals: Globals, private loginService: LoginService, private modal: BsModalService, private dialog: MatDialog) { }

  ngOnInit() {
    this.localSession = localStorage.getItem('user_data');
    this.user_roles = JSON.parse(this.localSession).productRoles;
  }

  isRoleMatching(roleId: number): any {
    //return this.globals.productRoles.find((role: any) => role.roleId === roleId);
    return this.user_roles.find((role: any) => role.roleId === roleId);
    //return this.user_roles.forEach((role: any) => (role.roleId === roleId) ? console.log("isRoleMatching :", role.roleId) : console.log("isRoleMatching1 :", role.roleId));

  }

}


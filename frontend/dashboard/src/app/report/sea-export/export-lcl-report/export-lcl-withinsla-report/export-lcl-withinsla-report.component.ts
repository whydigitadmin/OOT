import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-export-lcl-withinsla-report',
  templateUrl: './export-lcl-withinsla-report.component.html',
  styleUrls: ['./export-lcl-withinsla-report.component.scss']
})
export class ExportLclWithinslaReportComponent implements OnInit {

  dataSource = new MatTableDataSource<any>();

  displayedColumns: string[] = ['dept', 'product', 'action', 'ref_no', 'ref_type', 'ref_date', 'ref_mode'];

  @ViewChild(MatPaginator) Paginator!: MatPaginator;

  constructor(private loginService: LoginService, private route: ActivatedRoute,
    public dialogRef: MatDialogRef<ExportLclWithinslaReportComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

  };

  ngAfterViewInit() {
    this.dataSource.paginator = this.Paginator;
  }

  // ngOnInit(): void {
  //   this.route.queryParams.subscribe(params => {
  //     this.get_export_lcl_details_Withinsla_navigation(this.data);
  //   });
  // }

  // ngOnInit(): void {
  //   this.route.queryParams.subscribe(params => {
  //     const action = params['action'];
  //     const withinsla = params['withinsla'];

  //     if (action && withinsla) {
  //       // Call the method with the retrieved parameters
  //       this.get_export_lcl_details_Withinsla_navigation(action, withinsla);
  //     }
  //   });
  // }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      // const { action, withinsla } = params; // Assuming 'withinsla' is a query parameter

      this.get_export_lcl_details_Withinsla_navigation(this.data);
    });
  }

  get_export_lcl_details_Withinsla_navigation(action: string): void {
    console.log("mani", this.data, action);

    this.loginService.getExportLclDetailsWithinSla(action).subscribe(
      (response: any) => {
        this.dataSource.data = response;
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
  }

}

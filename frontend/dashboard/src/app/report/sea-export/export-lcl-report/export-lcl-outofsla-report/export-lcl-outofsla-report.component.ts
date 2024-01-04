import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-export-lcl-outofsla-report',
  templateUrl: './export-lcl-outofsla-report.component.html',
  styleUrls: ['./export-lcl-outofsla-report.component.scss']
})

export class ExportLclOutofslaReportComponent implements OnInit {

  dataSource = new MatTableDataSource<any>();

  displayedColumns: string[] = ['dept', 'product', 'action', 'ref_no', 'ref_type', 'ref_date', 'ref_mode'];

  @ViewChild(MatPaginator) Paginator!: MatPaginator;

  constructor(private loginService: LoginService, private route: ActivatedRoute,
    public dialogRef: MatDialogRef<ExportLclOutofslaReportComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

  };

  ngAfterViewInit() {
    this.dataSource.paginator = this.Paginator;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      // const { action, withinsla } = params; // Assuming 'withinsla' is a query parameter

      this.get_export_lcl_details_OutOfSla_navigation(this.data);
    });
  }

  get_export_lcl_details_OutOfSla_navigation(action: string): void {
    console.log("mani", this.data, action);

    this.loginService.getExportLclDetailsOutOfSla(action).subscribe(
      (response: any) => {
        this.dataSource.data = response;
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
  }

}


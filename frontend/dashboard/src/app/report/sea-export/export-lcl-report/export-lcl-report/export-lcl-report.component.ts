import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-export-lcl-report',
  templateUrl: './export-lcl-report.component.html',
  styleUrls: ['./export-lcl-report.component.scss']
})

export class ExportLclReportComponent implements OnInit {

  dataSource = new MatTableDataSource<any>([]);
  isLoading: boolean = true;
  displayedColumns: string[] = ['dept', 'product', 'action', 'ref_no', 'ref_type', 'ref_date', 'ref_mode'];

  @ViewChild(MatPaginator) Paginator!: MatPaginator;

  constructor(private loginService: LoginService, private route: ActivatedRoute,
    public dialogRef: MatDialogRef<ExportLclReportComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

  };

  ngAfterViewInit() {
    this.dataSource.paginator = this.Paginator;
  }

  ngOnInit(): void {
    this.get_export_lcl_details_navigation1();
  }

  get_export_lcl_details_navigation1(): void {
    const action = this.data; // Replace 'yourAction' with the actual action needed
    this.loginService.getExportLclDetailsCount(action).subscribe(
      (response: any) => {
        this.dataSource.data = response; // Make sure response is an array

        // Set paginator after the data is loaded
        this.dataSource.paginator = this.Paginator;
        this.isLoading = false;

      },
      (error: any) => {
        console.error('Error:', error);
        this.isLoading = false;
      }
    );
  }

}
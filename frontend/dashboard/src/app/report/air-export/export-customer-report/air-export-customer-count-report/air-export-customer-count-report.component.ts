import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-air-export-customer-count-report',
  templateUrl: './air-export-customer-count-report.component.html',
  styleUrls: ['./air-export-customer-count-report.component.scss']
})

export class AirExportCustomerCountReportComponent implements OnInit {

  dataSource = new MatTableDataSource<any>([]);
  isLoading: boolean = true;
  displayedColumns: string[] = ['dept', 'product', 'action', 'ref_no', 'ref_type', 'ref_date', 'ref_mode'];

  @ViewChild(MatPaginator) Paginator!: MatPaginator;

  constructor(private loginService: LoginService, private route: ActivatedRoute,
    public dialogRef: MatDialogRef<AirExportCustomerCountReportComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

  };

  ngAfterViewInit() {
    this.dataSource.paginator = this.Paginator;
  }

  ngOnInit(): void {
    this.get_air_export_customerService_details_navigation1();
  }

  get_air_export_customerService_details_navigation1(): void {
    const action = this.data; // Replace 'yourAction' with the actual action needed
    this.loginService.getAirExportCustomerCountDetails(action).subscribe(
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

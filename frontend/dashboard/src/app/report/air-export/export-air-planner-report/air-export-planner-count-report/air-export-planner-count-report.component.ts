import { Component, Inject, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-air-export-planner-count-report',
  templateUrl: './air-export-planner-count-report.component.html',
  styleUrls: ['./air-export-planner-count-report.component.scss']
})

export class AirExportPlannerCountReportComponent implements OnInit {

  dataSource = new MatTableDataSource<any>([]);
  isLoading: boolean = true;
  displayedColumns: string[] = ['dept', 'product', 'action', 'ref_no', 'ref_type', 'ref_date', 'ref_mode'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute,
    public dialogRef: MatDialogRef<AirExportPlannerCountReportComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.get_air_export_planner_details_count_navigation();
  }

  ngAfterViewInit(): void {
    // Set paginator after the view is initialized
    this.dataSource.paginator = this.paginator;
  }

  get_air_export_planner_details_count_navigation(): void {
    const action = this.data; // Replace 'yourAction' with the actual action needed
    this.loginService.getAirExportPlannerCountDetails(action).subscribe(
      (response: any) => {
        this.dataSource.data = response; // Make sure response is an array

        // Set paginator after the data is loaded
        this.dataSource.paginator = this.paginator;
        this.isLoading = false;

      },
      (error: any) => {
        console.error('Error:', error);
        this.isLoading = false;
      }
    );
  }
}



import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-export-planner-withinsla-report',
  templateUrl: './export-planner-withinsla-report.component.html',
  styleUrls: ['./export-planner-withinsla-report.component.scss']
})

export class ExportPlannerWithinslaReportComponent implements OnInit {

  dataSource = new MatTableDataSource<any>([]);
  isLoading: boolean = true;
  displayedColumns: string[] = ['dept', 'product', 'action', 'ref_no', 'ref_type', 'ref_date', 'ref_mode'];

  @ViewChild(MatPaginator) Paginator!: MatPaginator;

  constructor(private loginService: LoginService, private route: ActivatedRoute,
    public dialogRef: MatDialogRef<ExportPlannerWithinslaReportComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

  };

  ngAfterViewInit() {
    this.dataSource.paginator = this.Paginator;
  }

  ngOnInit(): void {
    this.get_export_planner_details_Withinsla_navigation();
  }

  get_export_planner_details_Withinsla_navigation(): void {
    const action = this.data; // Replace 'yourAction' with the actual action needed
    this.loginService.getExportPlannerWithinslaDetails(action).subscribe(
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

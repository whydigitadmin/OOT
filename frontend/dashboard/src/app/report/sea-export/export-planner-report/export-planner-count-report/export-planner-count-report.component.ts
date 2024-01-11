import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-export-planner-count-report',
  templateUrl: './export-planner-count-report.component.html',
  styleUrls: ['./export-planner-count-report.component.scss']
})

export class ExportPlannerCountReportComponent implements OnInit {

  dataSource = new MatTableDataSource<any>();

  displayedColumns: string[] = ['dept', 'product', 'action', 'ref_no', 'ref_type', 'ref_date', 'ref_mode'];

  @ViewChild(MatPaginator) Paginator!: MatPaginator;

  constructor(private loginService: LoginService, private route: ActivatedRoute,
    public dialogRef: MatDialogRef<ExportPlannerCountReportComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

  };

  ngAfterViewInit() {
    this.dataSource.paginator = this.Paginator;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.get_export_planner_Count_details_navigation(this.data);
    });
  }

  get_export_planner_Count_details_navigation(action: string): void {

    this.loginService.getExportPlannerCountDetails(action).subscribe(
      (response: any) => {
        this.dataSource.data = response;
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
  }

}

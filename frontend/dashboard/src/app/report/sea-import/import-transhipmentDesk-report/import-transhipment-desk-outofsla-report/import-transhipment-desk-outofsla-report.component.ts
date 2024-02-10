import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-import-transhipment-desk-outofsla-report',
  templateUrl: './import-transhipment-desk-outofsla-report.component.html',
  styleUrls: ['./import-transhipment-desk-outofsla-report.component.scss']
})

export class ImportTranshipmentDeskOutofslaReportComponent implements OnInit {

  dataSource = new MatTableDataSource<any>([]);
  isLoading: boolean = true;

  displayedColumns: string[] = ['dept', 'product', 'action', 'ref_no', 'ref_type', 'ref_date', 'ref_mode'];

  @ViewChild(MatPaginator) Paginator!: MatPaginator;

  constructor(private loginService: LoginService, private route: ActivatedRoute,
    public dialogRef: MatDialogRef<ImportTranshipmentDeskOutofslaReportComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

  };

  ngAfterViewInit() {
    this.dataSource.paginator = this.Paginator;
  }

  ngOnInit(): void {
    this.get_import_transhipmentDesk_details_OutOfSla_navigation();
  }

  get_import_transhipmentDesk_details_OutOfSla_navigation(): void {
    const action = this.data;
    console.log("mani", this.data, action);

    this.loginService.getImporttranshipmentDeskDetailsOutOfSla(action).subscribe(
      (response: any) => {
        this.dataSource.data = response;
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



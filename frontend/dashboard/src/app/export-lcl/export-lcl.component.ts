import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Export_LCL_Details } from '../model/export-model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-export-lcl',
  templateUrl: './export-lcl.component.html',
  styleUrls: ['./export-lcl.component.scss'],
})

export class ExportLclComponent implements OnInit {

  dataSource = new MatTableDataSource<any>();

  displayedColumns: string[] = ['dept', 'product', 'action', 'ref_no', 'ref_type', 'ref_date', 'ref_mode'];

  @ViewChild(MatPaginator) Paginator!: MatPaginator;

  constructor(private loginService: LoginService , private route: ActivatedRoute){
    
  };

  ngAfterViewInit() {
    this.dataSource.paginator = this.Paginator;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
    this.get_export_lcl_details_navigation1(params['param1']);
    });
  }

  get_export_lcl_details_navigation1(action: string): void {
   
    this.loginService.getExportLclDetails(action).subscribe(
      (response: any) => {
        this.dataSource.data = response;
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
  }

}

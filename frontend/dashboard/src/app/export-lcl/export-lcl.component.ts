import { Component, Input, OnInit, ViewChild } from '@angular/core';
// import { MatTableDataSource } from '@angular/material/table';
import { LoginService } from '../service/login.service';
import { Export_LCL_Details } from '../model/export-model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
// import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-export-lcl',
  templateUrl: './export-lcl.component.html',
  styleUrls: ['./export-lcl.component.scss'],
})

export class ExportLclComponent implements OnInit {


  @Input()
  export_lcl_details!: Export_LCL_Details[];

  displayedColumns: string[] = ['Department', 'Product', 'Action', 'Reference Number', 'Reference Date', 'Reference Type', 'Reference Mode'];
  dataSource = new MatTableDataSource<any>(this.export_lcl_details);
  // dataSource = new MatTableDataSource<any>(Export_LCL_Details[]);

  // datasource_export_lcl_details : Export_LCL_Details[] = [];

  @ViewChild(MatPaginator) Paginator!: MatPaginator;

  constructor(private loginService: LoginService , private route: ActivatedRoute){
    this.dataSource = new MatTableDataSource(this.export_lcl_details)
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
       
        console.log('Backend response:', response);
        this.dataSource.data = response;
      
      },
      (error: any) => {
        // Handle errors
        console.error('Error:', error);
      }
    );
  }

}

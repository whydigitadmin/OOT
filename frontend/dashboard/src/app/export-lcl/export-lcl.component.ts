import { Component, OnInit } from '@angular/core';
// import { MatTableDataSource } from '@angular/material/table';
import { LoginService } from '../service/login.service';
import { Export_LCL_Details } from '../model/export-model';

@Component({
  selector: 'app-export-lcl',
  templateUrl: './export-lcl.component.html',
  styleUrls: ['./export-lcl.component.scss']
})

export class ExportLclComponent implements OnInit {
  displayedColumns: string[] = ['column1', 'column2', 'column3', 'column4', 'column5', 'column6', 'column7'];
  // dataSource = new MatTableDataSource<any>(Export_LCL_Details[]);

  datasource_export_lcl_details : Export_LCL_Details[] = [];

  constructor(private loginService: LoginService){};

  ngOnInit(): void {
    // Initialize your data source
    console.log('get')
    this.get_export_lcl_details();
  }

  get_export_lcl_details() {
    console.log("excuted");
    
    this.loginService.getExportLclDetails('action')
      .subscribe(
        (response) => {
          this.datasource_export_lcl_details = response;
          // Handle the response data here
          console.log('Response:', this.datasource_export_lcl_details);
        },
        (error) => {
          // Handle any errors here
          console.error('Error:', error);
        }
      );
  }

}

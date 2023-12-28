import { Component, Input, OnInit, ViewChild } from '@angular/core';
// import { MatTableDataSource } from '@angular/material/table';
import { LoginService } from '../service/login.service';
import { Export_LCL_Details } from '../model/export-model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
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

  constructor(private loginService: LoginService){
    this.dataSource = new MatTableDataSource(this.export_lcl_details)
  };

ngAfterViewInit() {
  this.dataSource.paginator = this.Paginator;
}

  ngOnInit(): void {
    // Initialize your data source

  }

}

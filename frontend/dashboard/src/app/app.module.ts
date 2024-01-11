import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { LayoutComponent } from './layout/layout.component';
import { Globals } from './model/user-details.model';
import { HighchartsChartModule } from 'highcharts-angular';
import { FooterComponent } from './views/theme/footer/footer.component';
import { LayoutConfigService } from './service/layout-config.service';
import { HtmlClassService } from './views/theme/html-class.service';
import { HeaderComponent } from './views/theme/header/header.component';
import { MenuHorizontalComponent } from './views/theme/menu-horizontal/menu-horizontal.component';
import { MenuConfigService } from './service/menu-config.service';
import { MenuHorizontalService } from './service/menu-horizontal.service';
import { TopbarComponent } from './views/theme/header/topbar/topbar.component';
import { BrandComponent } from './views/theme/brand/brand.component';
import { LoginScreenService } from './service/login-screen.service';
import { SubheaderComponent } from './views/theme/subheader/subheader.component';
import { Subheader1Component } from './views/layout/subheader1/subheader1.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { LoginScreenHeaderComponent } from './views/layout/login-screen-header/login-screen-header.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LogoutModalComponent } from './logout-modal/logout-modal.component';
import { SidebarComponent } from './sidebar/sidebar.component';
// import { ExportLclComponent } from './export-lcl/export-lcl.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ExportLclReportComponent } from './report/sea-export/export-lcl-report/export-lcl-report/export-lcl-report.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ExportLclWithinslaReportComponent } from './report/sea-export/export-lcl-report/export-lcl-withinsla-report/export-lcl-withinsla-report.component';
import { ExportLclOutofslaReportComponent } from './report/sea-export/export-lcl-report/export-lcl-outofsla-report/export-lcl-outofsla-report.component';
import { ExportDocumentationCountReportComponent } from './report/sea-export/export-documentation-report/export-documentation-count-report/export-documentation-count-report.component';
import { ExportDocumentationWithinslaReportComponent } from './report/sea-export/export-documentation-report/export-documentation-withinsla-report/export-documentation-withinsla-report.component';
import { ExportDocumentationOutofslaReportComponent } from './report/sea-export/export-documentation-report/export-documentation-outofsla-report/export-documentation-outofsla-report.component';
import { ExportPlannerCountReportComponent } from './report/sea-export/export-planner-report/export-planner-count-report/export-planner-count-report.component';
import { ExportPlannerWithinslaReportComponent } from './report/sea-export/export-planner-report/export-planner-withinsla-report/export-planner-withinsla-report.component';
import { ExportPlannerOutofslaReportComponent } from './report/sea-export/export-planner-report/export-planner-outofsla-report/export-planner-outofsla-report.component';
// import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    LayoutComponent,
    FooterComponent,
    HeaderComponent,
    MenuHorizontalComponent,
    TopbarComponent,
    BrandComponent,
    LoginScreenHeaderComponent,
    SubheaderComponent,
    Subheader1Component,
    // ExportLclComponent,
    ExportLclReportComponent,
    ExportLclWithinslaReportComponent,
    ExportLclOutofslaReportComponent,
    ExportDocumentationCountReportComponent,
    ExportDocumentationWithinslaReportComponent,
    ExportDocumentationOutofslaReportComponent,
    ExportPlannerCountReportComponent,
    ExportPlannerWithinslaReportComponent,
    ExportPlannerOutofslaReportComponent,
    // AirExportDashboardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    HighchartsChartModule,
    MatTooltipModule,
    LogoutModalComponent,
    SidebarComponent,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule
  ],
  providers: [Globals, LayoutConfigService, HtmlClassService, MenuHorizontalService,
    MenuConfigService, LoginScreenService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
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
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ImportLclCountReportComponent } from './report/sea-import/import-lcl-report/import-lcl-count-report/import-lcl-count-report.component';
import { ImportLclWithinslaReportComponent } from './report/sea-import/import-lcl-report/import-lcl-withinsla-report/import-lcl-withinsla-report.component';
import { ImportLclOutofslaReportComponent } from './report/sea-import/import-lcl-report/import-lcl-outofsla-report/import-lcl-outofsla-report.component';
import { ImportFclCountReportComponent } from './report/sea-import/import-fcl-report/import-fcl-count-report/import-fcl-count-report.component';
import { ImportFclWithinslaReportComponent } from './report/sea-import/import-fcl-report/import-fcl-withinsla-report/import-fcl-withinsla-report.component';
import { ImportFclOutofslaReportComponent } from './report/sea-import/import-fcl-report/import-fcl-outofsla-report/import-fcl-outofsla-report.component';
import { ImportDocumentationCountReportComponent } from './report/sea-import/import-documentation-report/import-documentation-count-report/import-documentation-count-report.component';
import { ImportDocumentationWithinslaReportComponent } from './report/sea-import/import-documentation-report/import-documentation-withinsla-report/import-documentation-withinsla-report.component';
import { ImportDocumentationOutofslaReportComponent } from './report/sea-import/import-documentation-report/import-documentation-outofsla-report/import-documentation-outofsla-report.component';
import { ExportSalesCountReportComponent } from './report/sea-export/export-sales-support-report/export-sales-count-report/export-sales-count-report.component';
import { ImportSalesCountReportComponent } from './report/sea-import/import-sales-support-report/import-sales-count-report/import-sales-count-report.component';
import { ImportTranshipmentDeskCountReportComponent } from './report/sea-import/import-transhipmentDesk-report/import-transhipment-desk-count-report/import-transhipment-desk-count-report.component';
import { ImportTranshipmentDeskWithinslaReportComponent } from './report/sea-import/import-transhipmentDesk-report/import-transhipment-desk-withinsla-report/import-transhipment-desk-withinsla-report.component';
import { ImportTranshipmentDeskOutofslaReportComponent } from './report/sea-import/import-transhipmentDesk-report/import-transhipment-desk-outofsla-report/import-transhipment-desk-outofsla-report.component';
import { AirExportSalesCountReportComponent } from './report/air-export/export-sales-report/air-export-sales-count-report/air-export-sales-count-report.component';
import { AirExportDocumentationCountReportComponent } from './report/air-export/export-air-documentation-report/air-export-documentation-count-report/air-export-documentation-count-report.component';
import { AirExportDocumentationWithinslaReportComponent } from './report/air-export/export-air-documentation-report/air-export-documentation-withinsla-report/air-export-documentation-withinsla-report.component';
import { AirExportDocumentationOutofslaReportComponent } from './report/air-export/export-air-documentation-report/air-export-documentation-outofsla-report/air-export-documentation-outofsla-report.component';
import { AirExportPlannerCountReportComponent } from './report/air-export/export-air-planner-report/air-export-planner-count-report/air-export-planner-count-report.component';
import { AirExportPlannerWithinslaReportComponent } from './report/air-export/export-air-planner-report/air-export-planner-withinsla-report/air-export-planner-withinsla-report.component';
import { AirExportPlannerOutofslaReportComponent } from './report/air-export/export-air-planner-report/air-export-planner-outofsla-report/air-export-planner-outofsla-report.component';
import { SeaExportBLreleaseDeskCountReportComponent } from './report/sea-export/export-blreleaseDesk-report/sea-export-b-lrelease-desk-count-report/sea-export-b-lrelease-desk-count-report.component';
import { SeaExportBLreleaseDeskWithinslaReportComponent } from './report/sea-export/export-blreleaseDesk-report/sea-export-b-lrelease-desk-withinsla-report/sea-export-b-lrelease-desk-withinsla-report.component';
import { SeaExportBLreleaseDeskOutofslaReportComponent } from './report/sea-export/export-blreleaseDesk-report/sea-export-b-lrelease-desk-outofsla-report/sea-export-b-lrelease-desk-outofsla-report.component';
import { AirExportCustomerCountReportComponent } from './report/air-export/export-customer-report/air-export-customer-count-report/air-export-customer-count-report.component';
import { AirExportCustomerWithinslaReportComponent } from './report/air-export/export-customer-report/air-export-customer-withinsla-report/air-export-customer-withinsla-report.component';
import { AirExportCustomerOutofslaReportComponent } from './report/air-export/export-customer-report/air-export-customer-outofsla-report/air-export-customer-outofsla-report.component';
import { AirExportBlreleaseDeskCountReportComponent } from './report/air-export/export-air-blreleaseDesk-report/air-export-blrelease-desk-count-report/air-export-blrelease-desk-count-report.component';
import { AirExportBlreleaseDeskWithinslaReportComponent } from './report/air-export/export-air-blreleaseDesk-report/air-export-blrelease-desk-withinsla-report/air-export-blrelease-desk-withinsla-report.component';
import { AirExportBlreleaseDeskOutofslaReportComponent } from './report/air-export/export-air-blreleaseDesk-report/air-export-blrelease-desk-outofsla-report/air-export-blrelease-desk-outofsla-report.component';
import { AirImportSalesSupportCountReportComponent } from './report/air-import/air-import-sales-support-report/air-import-sales-support-count-report/air-import-sales-support-count-report.component';
import { AirImportCustomerServiceCountReportComponent } from './report/air-import/air-import-customer-service-report/air-import-customer-service-count-report/air-import-customer-service-count-report.component';
import { AirImportCustomerServiceWithinslaReportComponent } from './report/air-import/air-import-customer-service-report/air-import-customer-service-withinsla-report/air-import-customer-service-withinsla-report.component';
import { AirImportCustomerServiceOutofslaReportComponent } from './report/air-import/air-import-customer-service-report/air-import-customer-service-outofsla-report/air-import-customer-service-outofsla-report.component';
import { AirImportDocumentationCountReportComponent } from './report/air-import/air-import-documentation-report/air-import-documentation-count-report/air-import-documentation-count-report.component';
import { AirImportDocumentationWithinslaReportComponent } from './report/air-import/air-import-documentation-report/air-import-documentation-withinsla-report/air-import-documentation-withinsla-report.component';
import { AirImportDocumentationOutofslaReportComponent } from './report/air-import/air-import-documentation-report/air-import-documentation-outofsla-report/air-import-documentation-outofsla-report.component';
import { AirImportTranshipmentDeskCountReportComponent } from './report/air-import/air-import-transhipmentDesk-report/air-import-transhipment-desk-count-report/air-import-transhipment-desk-count-report.component';
import { AirImportTranshipmentDeskWithinslaReportComponent } from './report/air-import/air-import-transhipmentDesk-report/air-import-transhipment-desk-withinsla-report/air-import-transhipment-desk-withinsla-report.component';
import { AirImportTranshipmentDeskOutofslaReportComponent } from './report/air-import/air-import-transhipmentDesk-report/air-import-transhipment-desk-outofsla-report/air-import-transhipment-desk-outofsla-report.component';
import { LoginInterceptor } from './interceptor/LoginInterceptor';
import { JWTService } from './service/JWTService.';
import { ExportFclOutofslaReportComponent } from './report/sea-export/export-fcl-report/export-fcl-outofsla-report/export-fcl-outofsla-report.component';
import { ExportFclReportComponent } from './report/sea-export/export-fcl-report/export-fcl-report/export-fcl-report.component';
import { ExportFclWithinslaReportComponent } from './report/sea-export/export-fcl-report/export-fcl-withinsla-report/export-fcl-withinsla-report.component';
import { MatSelectModule } from '@angular/material/select';

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
    ExportLclReportComponent,
    ExportLclWithinslaReportComponent,
    ExportLclOutofslaReportComponent,
    ExportFclReportComponent,
    ExportFclWithinslaReportComponent,
    ExportFclOutofslaReportComponent,
    ExportDocumentationCountReportComponent,
    ExportDocumentationWithinslaReportComponent,
    ExportDocumentationOutofslaReportComponent,
    ExportPlannerCountReportComponent,
    ExportPlannerWithinslaReportComponent,
    ExportPlannerOutofslaReportComponent,
    ImportLclCountReportComponent,
    ImportLclWithinslaReportComponent,
    ImportLclOutofslaReportComponent,
    ImportFclCountReportComponent,
    ImportFclWithinslaReportComponent,
    ImportFclOutofslaReportComponent,
    ImportDocumentationCountReportComponent,
    ImportDocumentationWithinslaReportComponent,
    ImportDocumentationOutofslaReportComponent,
    ExportSalesCountReportComponent,
    ImportSalesCountReportComponent,
    ImportTranshipmentDeskCountReportComponent,
    ImportTranshipmentDeskWithinslaReportComponent,
    ImportTranshipmentDeskOutofslaReportComponent,
    AirExportSalesCountReportComponent,
    AirExportDocumentationCountReportComponent,
    AirExportDocumentationWithinslaReportComponent,
    AirExportDocumentationOutofslaReportComponent,
    AirExportPlannerCountReportComponent,
    AirExportPlannerWithinslaReportComponent,
    AirExportPlannerOutofslaReportComponent,
    SeaExportBLreleaseDeskCountReportComponent,
    SeaExportBLreleaseDeskWithinslaReportComponent,
    SeaExportBLreleaseDeskOutofslaReportComponent,
    AirExportCustomerCountReportComponent,
    AirExportCustomerWithinslaReportComponent,
    AirExportCustomerOutofslaReportComponent,
    AirExportBlreleaseDeskCountReportComponent,
    AirExportBlreleaseDeskWithinslaReportComponent,
    AirExportBlreleaseDeskOutofslaReportComponent,
    AirImportSalesSupportCountReportComponent,
    AirImportCustomerServiceCountReportComponent,
    AirImportCustomerServiceWithinslaReportComponent,
    AirImportCustomerServiceOutofslaReportComponent,
    AirImportDocumentationCountReportComponent,
    AirImportDocumentationWithinslaReportComponent,
    AirImportDocumentationOutofslaReportComponent,
    AirImportTranshipmentDeskCountReportComponent,
    AirImportTranshipmentDeskWithinslaReportComponent,
    AirImportTranshipmentDeskOutofslaReportComponent,

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
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSelectModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: LoginInterceptor,
    multi: true
  }, Globals, LayoutConfigService, HtmlClassService, MenuHorizontalService,
    MenuConfigService, LoginScreenService , JWTService],
  bootstrap: [AppComponent]
})
export class AppModule { }

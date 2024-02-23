import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirExportSalesCountReportComponent } from './air-export-sales-count-report.component';

describe('AirExportSalesCountReportComponent', () => {
  let component: AirExportSalesCountReportComponent;
  let fixture: ComponentFixture<AirExportSalesCountReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirExportSalesCountReportComponent]
    });
    fixture = TestBed.createComponent(AirExportSalesCountReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

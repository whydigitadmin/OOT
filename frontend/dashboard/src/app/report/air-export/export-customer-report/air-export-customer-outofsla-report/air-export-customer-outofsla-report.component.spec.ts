import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirExportCustomerOutofslaReportComponent } from './air-export-customer-outofsla-report.component';

describe('AirExportCustomerOutofslaReportComponent', () => {
  let component: AirExportCustomerOutofslaReportComponent;
  let fixture: ComponentFixture<AirExportCustomerOutofslaReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirExportCustomerOutofslaReportComponent]
    });
    fixture = TestBed.createComponent(AirExportCustomerOutofslaReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

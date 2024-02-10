import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirExportCustomerCountReportComponent } from './air-export-customer-count-report.component';

describe('AirExportCustomerCountReportComponent', () => {
  let component: AirExportCustomerCountReportComponent;
  let fixture: ComponentFixture<AirExportCustomerCountReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirExportCustomerCountReportComponent]
    });
    fixture = TestBed.createComponent(AirExportCustomerCountReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

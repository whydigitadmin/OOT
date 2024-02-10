import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirExportCustomerWithinslaReportComponent } from './air-export-customer-withinsla-report.component';

describe('AirExportCustomerWithinslaReportComponent', () => {
  let component: AirExportCustomerWithinslaReportComponent;
  let fixture: ComponentFixture<AirExportCustomerWithinslaReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirExportCustomerWithinslaReportComponent]
    });
    fixture = TestBed.createComponent(AirExportCustomerWithinslaReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

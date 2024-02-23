import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirImportCustomerServiceCountReportComponent } from './air-import-customer-service-count-report.component';

describe('AirImportCustomerServiceCountReportComponent', () => {
  let component: AirImportCustomerServiceCountReportComponent;
  let fixture: ComponentFixture<AirImportCustomerServiceCountReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirImportCustomerServiceCountReportComponent]
    });
    fixture = TestBed.createComponent(AirImportCustomerServiceCountReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

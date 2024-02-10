import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirImportCustomerServiceWithinslaReportComponent } from './air-import-customer-service-withinsla-report.component';

describe('AirImportCustomerServiceWithinslaReportComponent', () => {
  let component: AirImportCustomerServiceWithinslaReportComponent;
  let fixture: ComponentFixture<AirImportCustomerServiceWithinslaReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirImportCustomerServiceWithinslaReportComponent]
    });
    fixture = TestBed.createComponent(AirImportCustomerServiceWithinslaReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

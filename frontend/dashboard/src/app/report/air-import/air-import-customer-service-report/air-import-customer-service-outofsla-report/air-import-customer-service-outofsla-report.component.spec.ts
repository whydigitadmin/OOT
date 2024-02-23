import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirImportCustomerServiceOutofslaReportComponent } from './air-import-customer-service-outofsla-report.component';

describe('AirImportCustomerServiceOutofslaReportComponent', () => {
  let component: AirImportCustomerServiceOutofslaReportComponent;
  let fixture: ComponentFixture<AirImportCustomerServiceOutofslaReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirImportCustomerServiceOutofslaReportComponent]
    });
    fixture = TestBed.createComponent(AirImportCustomerServiceOutofslaReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

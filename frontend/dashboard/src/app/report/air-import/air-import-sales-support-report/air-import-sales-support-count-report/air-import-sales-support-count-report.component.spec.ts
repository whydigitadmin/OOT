import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirImportSalesSupportCountReportComponent } from './air-import-sales-support-count-report.component';

describe('AirImportSalesSupportCountReportComponent', () => {
  let component: AirImportSalesSupportCountReportComponent;
  let fixture: ComponentFixture<AirImportSalesSupportCountReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirImportSalesSupportCountReportComponent]
    });
    fixture = TestBed.createComponent(AirImportSalesSupportCountReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

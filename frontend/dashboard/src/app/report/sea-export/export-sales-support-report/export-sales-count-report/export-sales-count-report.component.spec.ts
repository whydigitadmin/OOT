import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportSalesCountReportComponent } from './export-sales-count-report.component';

describe('ExportSalesCountReportComponent', () => {
  let component: ExportSalesCountReportComponent;
  let fixture: ComponentFixture<ExportSalesCountReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExportSalesCountReportComponent]
    });
    fixture = TestBed.createComponent(ExportSalesCountReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

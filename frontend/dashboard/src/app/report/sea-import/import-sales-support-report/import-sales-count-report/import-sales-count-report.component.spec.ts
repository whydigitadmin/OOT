import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportSalesCountReportComponent } from './import-sales-count-report.component';

describe('ImportSalesCountReportComponent', () => {
  let component: ImportSalesCountReportComponent;
  let fixture: ComponentFixture<ImportSalesCountReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImportSalesCountReportComponent]
    });
    fixture = TestBed.createComponent(ImportSalesCountReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportLclWithinslaReportComponent } from './export-lcl-withinsla-report.component';

describe('ExportLclWithinslaReportComponent', () => {
  let component: ExportLclWithinslaReportComponent;
  let fixture: ComponentFixture<ExportLclWithinslaReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExportLclWithinslaReportComponent]
    });
    fixture = TestBed.createComponent(ExportLclWithinslaReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

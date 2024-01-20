import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportLclReportComponent } from './export-lcl-report.component';

describe('ExportLclReportComponent', () => {
  let component: ExportLclReportComponent;
  let fixture: ComponentFixture<ExportLclReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExportLclReportComponent]
    });
    fixture = TestBed.createComponent(ExportLclReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

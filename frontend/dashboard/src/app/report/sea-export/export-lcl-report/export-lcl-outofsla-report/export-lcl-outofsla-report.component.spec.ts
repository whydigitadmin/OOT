import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportLclOutofslaReportComponent } from './export-lcl-outofsla-report.component';

describe('ExportLclOutofslaReportComponent', () => {
  let component: ExportLclOutofslaReportComponent;
  let fixture: ComponentFixture<ExportLclOutofslaReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExportLclOutofslaReportComponent]
    });
    fixture = TestBed.createComponent(ExportLclOutofslaReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirExportDocumentationOutofslaReportComponent } from './air-export-documentation-outofsla-report.component';

describe('AirExportDocumentationOutofslaReportComponent', () => {
  let component: AirExportDocumentationOutofslaReportComponent;
  let fixture: ComponentFixture<AirExportDocumentationOutofslaReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirExportDocumentationOutofslaReportComponent]
    });
    fixture = TestBed.createComponent(AirExportDocumentationOutofslaReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

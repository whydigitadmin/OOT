import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirExportDocumentationCountReportComponent } from './air-export-documentation-count-report.component';

describe('AirExportDocumentationCountReportComponent', () => {
  let component: AirExportDocumentationCountReportComponent;
  let fixture: ComponentFixture<AirExportDocumentationCountReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirExportDocumentationCountReportComponent]
    });
    fixture = TestBed.createComponent(AirExportDocumentationCountReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

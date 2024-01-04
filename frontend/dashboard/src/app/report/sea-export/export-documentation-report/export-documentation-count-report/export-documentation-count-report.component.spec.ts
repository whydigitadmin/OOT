import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportDocumentationCountReportComponent } from './export-documentation-count-report.component';

describe('ExportDocumentationCountReportComponent', () => {
  let component: ExportDocumentationCountReportComponent;
  let fixture: ComponentFixture<ExportDocumentationCountReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExportDocumentationCountReportComponent]
    });
    fixture = TestBed.createComponent(ExportDocumentationCountReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

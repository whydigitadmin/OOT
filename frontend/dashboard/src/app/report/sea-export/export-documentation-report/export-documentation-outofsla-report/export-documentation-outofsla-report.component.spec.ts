import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportDocumentationOutofslaReportComponent } from './export-documentation-outofsla-report.component';

describe('ExportDocumentationOutofslaReportComponent', () => {
  let component: ExportDocumentationOutofslaReportComponent;
  let fixture: ComponentFixture<ExportDocumentationOutofslaReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExportDocumentationOutofslaReportComponent]
    });
    fixture = TestBed.createComponent(ExportDocumentationOutofslaReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

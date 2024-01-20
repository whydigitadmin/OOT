import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportDocumentationWithinslaReportComponent } from './export-documentation-withinsla-report.component';

describe('ExportDocumentationWithinslaReportComponent', () => {
  let component: ExportDocumentationWithinslaReportComponent;
  let fixture: ComponentFixture<ExportDocumentationWithinslaReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExportDocumentationWithinslaReportComponent]
    });
    fixture = TestBed.createComponent(ExportDocumentationWithinslaReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

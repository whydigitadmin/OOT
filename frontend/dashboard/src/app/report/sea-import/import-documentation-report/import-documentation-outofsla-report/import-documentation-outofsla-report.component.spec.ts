import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportDocumentationOutofslaReportComponent } from './import-documentation-outofsla-report.component';

describe('ImportDocumentationOutofslaReportComponent', () => {
  let component: ImportDocumentationOutofslaReportComponent;
  let fixture: ComponentFixture<ImportDocumentationOutofslaReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImportDocumentationOutofslaReportComponent]
    });
    fixture = TestBed.createComponent(ImportDocumentationOutofslaReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportDocumentationCountReportComponent } from './import-documentation-count-report.component';

describe('ImportDocumentationCountReportComponent', () => {
  let component: ImportDocumentationCountReportComponent;
  let fixture: ComponentFixture<ImportDocumentationCountReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImportDocumentationCountReportComponent]
    });
    fixture = TestBed.createComponent(ImportDocumentationCountReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

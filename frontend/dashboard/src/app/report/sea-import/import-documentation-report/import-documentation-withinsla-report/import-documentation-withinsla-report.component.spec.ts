import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportDocumentationWithinslaReportComponent } from './import-documentation-withinsla-report.component';

describe('ImportDocumentationWithinslaReportComponent', () => {
  let component: ImportDocumentationWithinslaReportComponent;
  let fixture: ComponentFixture<ImportDocumentationWithinslaReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImportDocumentationWithinslaReportComponent]
    });
    fixture = TestBed.createComponent(ImportDocumentationWithinslaReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

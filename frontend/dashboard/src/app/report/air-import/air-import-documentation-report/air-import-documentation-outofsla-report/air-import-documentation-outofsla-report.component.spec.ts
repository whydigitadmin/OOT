import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirImportDocumentationOutofslaReportComponent } from './air-import-documentation-outofsla-report.component';

describe('AirImportDocumentationOutofslaReportComponent', () => {
  let component: AirImportDocumentationOutofslaReportComponent;
  let fixture: ComponentFixture<AirImportDocumentationOutofslaReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirImportDocumentationOutofslaReportComponent]
    });
    fixture = TestBed.createComponent(AirImportDocumentationOutofslaReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

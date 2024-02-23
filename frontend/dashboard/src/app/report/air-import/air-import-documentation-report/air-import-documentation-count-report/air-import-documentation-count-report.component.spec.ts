import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirImportDocumentationCountReportComponent } from './air-import-documentation-count-report.component';

describe('AirImportDocumentationCountReportComponent', () => {
  let component: AirImportDocumentationCountReportComponent;
  let fixture: ComponentFixture<AirImportDocumentationCountReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirImportDocumentationCountReportComponent]
    });
    fixture = TestBed.createComponent(AirImportDocumentationCountReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

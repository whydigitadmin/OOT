import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirExportDocumentationWithinslaReportComponent } from './air-export-documentation-withinsla-report.component';

describe('AirExportDocumentationWithinslaReportComponent', () => {
  let component: AirExportDocumentationWithinslaReportComponent;
  let fixture: ComponentFixture<AirExportDocumentationWithinslaReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirExportDocumentationWithinslaReportComponent]
    });
    fixture = TestBed.createComponent(AirExportDocumentationWithinslaReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

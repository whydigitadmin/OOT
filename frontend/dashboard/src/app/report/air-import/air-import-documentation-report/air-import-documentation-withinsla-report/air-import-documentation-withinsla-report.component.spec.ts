import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirImportDocumentationWithinslaReportComponent } from './air-import-documentation-withinsla-report.component';

describe('AirImportDocumentationWithinslaReportComponent', () => {
  let component: AirImportDocumentationWithinslaReportComponent;
  let fixture: ComponentFixture<AirImportDocumentationWithinslaReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirImportDocumentationWithinslaReportComponent]
    });
    fixture = TestBed.createComponent(AirImportDocumentationWithinslaReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportLclCountReportComponent } from './import-lcl-count-report.component';

describe('ImportLclCountReportComponent', () => {
  let component: ImportLclCountReportComponent;
  let fixture: ComponentFixture<ImportLclCountReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImportLclCountReportComponent]
    });
    fixture = TestBed.createComponent(ImportLclCountReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

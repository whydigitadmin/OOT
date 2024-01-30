import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportLclWithinslaReportComponent } from './import-lcl-withinsla-report.component';

describe('ImportLclWithinslaReportComponent', () => {
  let component: ImportLclWithinslaReportComponent;
  let fixture: ComponentFixture<ImportLclWithinslaReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImportLclWithinslaReportComponent]
    });
    fixture = TestBed.createComponent(ImportLclWithinslaReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

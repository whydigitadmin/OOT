import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportFclWithinslaReportComponent } from './export-fcl-withinsla-report.component';

describe('ExportFclWithinslaReportComponent', () => {
  let component: ExportFclWithinslaReportComponent;
  let fixture: ComponentFixture<ExportFclWithinslaReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExportFclWithinslaReportComponent]
    });
    fixture = TestBed.createComponent(ExportFclWithinslaReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

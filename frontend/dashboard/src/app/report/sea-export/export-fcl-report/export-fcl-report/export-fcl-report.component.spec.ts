import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportFclReportComponent } from './export-fcl-report.component';

describe('ExportFclReportComponent', () => {
  let component: ExportFclReportComponent;
  let fixture: ComponentFixture<ExportFclReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExportFclReportComponent]
    });
    fixture = TestBed.createComponent(ExportFclReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

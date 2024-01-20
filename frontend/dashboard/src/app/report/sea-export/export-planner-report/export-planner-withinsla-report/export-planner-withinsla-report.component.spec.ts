import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportPlannerWithinslaReportComponent } from './export-planner-withinsla-report.component';

describe('ExportPlannerWithinslaReportComponent', () => {
  let component: ExportPlannerWithinslaReportComponent;
  let fixture: ComponentFixture<ExportPlannerWithinslaReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExportPlannerWithinslaReportComponent]
    });
    fixture = TestBed.createComponent(ExportPlannerWithinslaReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

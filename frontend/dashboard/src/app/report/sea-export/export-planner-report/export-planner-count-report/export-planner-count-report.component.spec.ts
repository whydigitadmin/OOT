import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportPlannerCountReportComponent } from './export-planner-count-report.component';

describe('ExportPlannerCountReportComponent', () => {
  let component: ExportPlannerCountReportComponent;
  let fixture: ComponentFixture<ExportPlannerCountReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExportPlannerCountReportComponent]
    });
    fixture = TestBed.createComponent(ExportPlannerCountReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

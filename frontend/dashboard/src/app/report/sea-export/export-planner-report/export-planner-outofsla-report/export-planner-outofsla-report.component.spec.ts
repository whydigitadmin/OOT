import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportPlannerOutofslaReportComponent } from './export-planner-outofsla-report.component';

describe('ExportPlannerOutofslaReportComponent', () => {
  let component: ExportPlannerOutofslaReportComponent;
  let fixture: ComponentFixture<ExportPlannerOutofslaReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExportPlannerOutofslaReportComponent]
    });
    fixture = TestBed.createComponent(ExportPlannerOutofslaReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

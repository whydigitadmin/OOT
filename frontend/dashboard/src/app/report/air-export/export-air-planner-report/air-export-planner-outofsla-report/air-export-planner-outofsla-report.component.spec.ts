import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirExportPlannerOutofslaReportComponent } from './air-export-planner-outofsla-report.component';

describe('AirExportPlannerOutofslaReportComponent', () => {
  let component: AirExportPlannerOutofslaReportComponent;
  let fixture: ComponentFixture<AirExportPlannerOutofslaReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirExportPlannerOutofslaReportComponent]
    });
    fixture = TestBed.createComponent(AirExportPlannerOutofslaReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

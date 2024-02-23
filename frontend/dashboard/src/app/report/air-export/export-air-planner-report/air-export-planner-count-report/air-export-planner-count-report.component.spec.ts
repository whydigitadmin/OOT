import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirExportPlannerCountReportComponent } from './air-export-planner-count-report.component';

describe('AirExportPlannerCountReportComponent', () => {
  let component: AirExportPlannerCountReportComponent;
  let fixture: ComponentFixture<AirExportPlannerCountReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirExportPlannerCountReportComponent]
    });
    fixture = TestBed.createComponent(AirExportPlannerCountReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

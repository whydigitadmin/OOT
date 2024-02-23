import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirExportPlannerWithinslaReportComponent } from './air-export-planner-withinsla-report.component';

describe('AirExportPlannerWithinslaReportComponent', () => {
  let component: AirExportPlannerWithinslaReportComponent;
  let fixture: ComponentFixture<AirExportPlannerWithinslaReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirExportPlannerWithinslaReportComponent]
    });
    fixture = TestBed.createComponent(AirExportPlannerWithinslaReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

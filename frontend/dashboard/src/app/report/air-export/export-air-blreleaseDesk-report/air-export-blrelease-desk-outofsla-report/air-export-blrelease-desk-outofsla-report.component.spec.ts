import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirExportBlreleaseDeskOutofslaReportComponent } from './air-export-blrelease-desk-outofsla-report.component';

describe('AirExportBlreleaseDeskOutofslaReportComponent', () => {
  let component: AirExportBlreleaseDeskOutofslaReportComponent;
  let fixture: ComponentFixture<AirExportBlreleaseDeskOutofslaReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirExportBlreleaseDeskOutofslaReportComponent]
    });
    fixture = TestBed.createComponent(AirExportBlreleaseDeskOutofslaReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

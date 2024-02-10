import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirExportBlreleaseDeskCountReportComponent } from './air-export-blrelease-desk-count-report.component';

describe('AirExportBlreleaseDeskCountReportComponent', () => {
  let component: AirExportBlreleaseDeskCountReportComponent;
  let fixture: ComponentFixture<AirExportBlreleaseDeskCountReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirExportBlreleaseDeskCountReportComponent]
    });
    fixture = TestBed.createComponent(AirExportBlreleaseDeskCountReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

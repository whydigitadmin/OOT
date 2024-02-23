import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaExportBLreleaseDeskCountReportComponent } from './sea-export-b-lrelease-desk-count-report.component';

describe('SeaExportBLreleaseDeskCountReportComponent', () => {
  let component: SeaExportBLreleaseDeskCountReportComponent;
  let fixture: ComponentFixture<SeaExportBLreleaseDeskCountReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeaExportBLreleaseDeskCountReportComponent]
    });
    fixture = TestBed.createComponent(SeaExportBLreleaseDeskCountReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaExportBLreleaseDeskWithinslaReportComponent } from './sea-export-b-lrelease-desk-withinsla-report.component';

describe('SeaExportBLreleaseDeskWithinslaReportComponent', () => {
  let component: SeaExportBLreleaseDeskWithinslaReportComponent;
  let fixture: ComponentFixture<SeaExportBLreleaseDeskWithinslaReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeaExportBLreleaseDeskWithinslaReportComponent]
    });
    fixture = TestBed.createComponent(SeaExportBLreleaseDeskWithinslaReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

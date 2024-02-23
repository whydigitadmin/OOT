import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaExportBLreleaseDeskOutofslaReportComponent } from './sea-export-b-lrelease-desk-outofsla-report.component';

describe('SeaExportBLreleaseDeskOutofslaReportComponent', () => {
  let component: SeaExportBLreleaseDeskOutofslaReportComponent;
  let fixture: ComponentFixture<SeaExportBLreleaseDeskOutofslaReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeaExportBLreleaseDeskOutofslaReportComponent]
    });
    fixture = TestBed.createComponent(SeaExportBLreleaseDeskOutofslaReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

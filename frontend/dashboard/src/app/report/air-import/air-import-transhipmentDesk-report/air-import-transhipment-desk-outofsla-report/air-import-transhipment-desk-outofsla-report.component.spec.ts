import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirImportTranshipmentDeskOutofslaReportComponent } from './air-import-transhipment-desk-outofsla-report.component';

describe('AirImportTranshipmentDeskOutofslaReportComponent', () => {
  let component: AirImportTranshipmentDeskOutofslaReportComponent;
  let fixture: ComponentFixture<AirImportTranshipmentDeskOutofslaReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirImportTranshipmentDeskOutofslaReportComponent]
    });
    fixture = TestBed.createComponent(AirImportTranshipmentDeskOutofslaReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

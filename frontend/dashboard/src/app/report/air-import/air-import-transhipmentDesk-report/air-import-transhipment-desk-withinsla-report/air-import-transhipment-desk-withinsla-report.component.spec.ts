import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirImportTranshipmentDeskWithinslaReportComponent } from './air-import-transhipment-desk-withinsla-report.component';

describe('AirImportTranshipmentDeskWithinslaReportComponent', () => {
  let component: AirImportTranshipmentDeskWithinslaReportComponent;
  let fixture: ComponentFixture<AirImportTranshipmentDeskWithinslaReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirImportTranshipmentDeskWithinslaReportComponent]
    });
    fixture = TestBed.createComponent(AirImportTranshipmentDeskWithinslaReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

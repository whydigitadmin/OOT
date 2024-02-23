import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirImportTranshipmentDeskCountReportComponent } from './air-import-transhipment-desk-count-report.component';

describe('AirImportTranshipmentDeskCountReportComponent', () => {
  let component: AirImportTranshipmentDeskCountReportComponent;
  let fixture: ComponentFixture<AirImportTranshipmentDeskCountReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirImportTranshipmentDeskCountReportComponent]
    });
    fixture = TestBed.createComponent(AirImportTranshipmentDeskCountReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

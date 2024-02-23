import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportTranshipmentDeskOutofslaReportComponent } from './import-transhipment-desk-outofsla-report.component';

describe('ImportTranshipmentDeskOutofslaReportComponent', () => {
  let component: ImportTranshipmentDeskOutofslaReportComponent;
  let fixture: ComponentFixture<ImportTranshipmentDeskOutofslaReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImportTranshipmentDeskOutofslaReportComponent]
    });
    fixture = TestBed.createComponent(ImportTranshipmentDeskOutofslaReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

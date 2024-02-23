import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportTranshipmentDeskCountReportComponent } from './import-transhipment-desk-count-report.component';

describe('ImportTranshipmentDeskCountReportComponent', () => {
  let component: ImportTranshipmentDeskCountReportComponent;
  let fixture: ComponentFixture<ImportTranshipmentDeskCountReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImportTranshipmentDeskCountReportComponent]
    });
    fixture = TestBed.createComponent(ImportTranshipmentDeskCountReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportTranshipmentDeskWithinslaReportComponent } from './import-transhipment-desk-withinsla-report.component';

describe('ImportTranshipmentDeskWithinslaReportComponent', () => {
  let component: ImportTranshipmentDeskWithinslaReportComponent;
  let fixture: ComponentFixture<ImportTranshipmentDeskWithinslaReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImportTranshipmentDeskWithinslaReportComponent]
    });
    fixture = TestBed.createComponent(ImportTranshipmentDeskWithinslaReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

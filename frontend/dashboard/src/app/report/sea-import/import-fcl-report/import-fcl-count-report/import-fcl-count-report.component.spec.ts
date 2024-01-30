import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportFclCountReportComponent } from './import-fcl-count-report.component';

describe('ImportFclCountReportComponent', () => {
  let component: ImportFclCountReportComponent;
  let fixture: ComponentFixture<ImportFclCountReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImportFclCountReportComponent]
    });
    fixture = TestBed.createComponent(ImportFclCountReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

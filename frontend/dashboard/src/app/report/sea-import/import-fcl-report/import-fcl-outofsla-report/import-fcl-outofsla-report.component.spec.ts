import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportFclOutofslaReportComponent } from './import-fcl-outofsla-report.component';

describe('ImportFclOutofslaReportComponent', () => {
  let component: ImportFclOutofslaReportComponent;
  let fixture: ComponentFixture<ImportFclOutofslaReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImportFclOutofslaReportComponent]
    });
    fixture = TestBed.createComponent(ImportFclOutofslaReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

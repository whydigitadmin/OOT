import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportFclWithinslaReportComponent } from './import-fcl-withinsla-report.component';

describe('ImportFclWithinslaReportComponent', () => {
  let component: ImportFclWithinslaReportComponent;
  let fixture: ComponentFixture<ImportFclWithinslaReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImportFclWithinslaReportComponent]
    });
    fixture = TestBed.createComponent(ImportFclWithinslaReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

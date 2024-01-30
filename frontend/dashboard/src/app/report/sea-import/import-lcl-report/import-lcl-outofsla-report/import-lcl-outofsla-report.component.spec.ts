import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportLclOutofslaReportComponent } from './import-lcl-outofsla-report.component';

describe('ImportLclOutofslaReportComponent', () => {
  let component: ImportLclOutofslaReportComponent;
  let fixture: ComponentFixture<ImportLclOutofslaReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImportLclOutofslaReportComponent]
    });
    fixture = TestBed.createComponent(ImportLclOutofslaReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

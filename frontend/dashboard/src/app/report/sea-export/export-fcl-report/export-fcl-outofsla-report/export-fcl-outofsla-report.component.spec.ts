import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExportFclOutofslaReportComponent } from './export-fcl-outofsla-report.component';


describe('ExportFclOutofslaReportComponent', () => {
  let component: ExportFclOutofslaReportComponent;
  let fixture: ComponentFixture<ExportFclOutofslaReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExportFclOutofslaReportComponent]
    });
    fixture = TestBed.createComponent(ExportFclOutofslaReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

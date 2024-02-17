import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartAirExportComponent } from './chart-air-export.component';

describe('ChartAirExportComponent', () => {
  let component: ChartAirExportComponent;
  let fixture: ComponentFixture<ChartAirExportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartAirExportComponent]
    });
    fixture = TestBed.createComponent(ChartAirExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

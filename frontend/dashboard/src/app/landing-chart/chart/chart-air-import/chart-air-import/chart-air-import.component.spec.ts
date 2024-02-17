import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartAirImportComponent } from './chart-air-import.component';

describe('ChartAirImportComponent', () => {
  let component: ChartAirImportComponent;
  let fixture: ComponentFixture<ChartAirImportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartAirImportComponent]
    });
    fixture = TestBed.createComponent(ChartAirImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

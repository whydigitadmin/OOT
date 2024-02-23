import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartSeaExportComponent } from './chart-sea-export.component';

describe('ChartSeaExportComponent', () => {
  let component: ChartSeaExportComponent;
  let fixture: ComponentFixture<ChartSeaExportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartSeaExportComponent]
    });
    fixture = TestBed.createComponent(ChartSeaExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

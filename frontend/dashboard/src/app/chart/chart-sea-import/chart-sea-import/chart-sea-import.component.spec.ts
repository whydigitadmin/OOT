import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartSeaImportComponent } from './chart-sea-import.component';

describe('ChartSeaImportComponent', () => {
  let component: ChartSeaImportComponent;
  let fixture: ComponentFixture<ChartSeaImportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartSeaImportComponent]
    });
    fixture = TestBed.createComponent(ChartSeaImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

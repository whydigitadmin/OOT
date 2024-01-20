import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirExportDashboardComponent } from './air-export-dashboard.component';

describe('AirExportDashboardComponent', () => {
  let component: AirExportDashboardComponent;
  let fixture: ComponentFixture<AirExportDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirExportDashboardComponent]
    });
    fixture = TestBed.createComponent(AirExportDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

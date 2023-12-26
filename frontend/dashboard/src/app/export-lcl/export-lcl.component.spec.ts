import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportLclComponent } from './export-lcl.component';

describe('ExportLclComponent', () => {
  let component: ExportLclComponent;
  let fixture: ComponentFixture<ExportLclComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExportLclComponent]
    });
    fixture = TestBed.createComponent(ExportLclComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

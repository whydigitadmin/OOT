import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OperationDashboard1Component } from './operation-dashboard1component';



describe('OperationDashboard1Component', () => {
  let component: OperationDashboard1Component;
  let fixture: ComponentFixture<OperationDashboard1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationDashboard1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationDashboard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

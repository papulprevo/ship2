import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashTrackingComponent } from './dash-tracking.component';

describe('DashTrackingComponent', () => {
  let component: DashTrackingComponent;
  let fixture: ComponentFixture<DashTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashTrackingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

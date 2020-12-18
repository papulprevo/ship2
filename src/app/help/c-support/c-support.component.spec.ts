import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSupportComponent } from './c-support.component';

describe('CSupportComponent', () => {
  let component: CSupportComponent;
  let fixture: ComponentFixture<CSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CSupportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NdrComponent } from './ndr.component';

describe('NdrComponent', () => {
  let component: NdrComponent;
  let fixture: ComponentFixture<NdrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NdrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

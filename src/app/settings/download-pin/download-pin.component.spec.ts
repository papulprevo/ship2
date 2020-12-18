import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadPinComponent } from './download-pin.component';

describe('DownloadPinComponent', () => {
  let component: DownloadPinComponent;
  let fixture: ComponentFixture<DownloadPinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadPinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadPinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

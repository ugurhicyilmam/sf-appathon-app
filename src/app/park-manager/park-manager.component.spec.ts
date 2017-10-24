import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkManagerComponent } from './park-manager.component';

describe('ParkManagerComponent', () => {
  let component: ParkManagerComponent;
  let fixture: ComponentFixture<ParkManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

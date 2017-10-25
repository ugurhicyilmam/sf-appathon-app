import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkManagerInspectComponent } from './park-manager-inspect.component';

describe('ParkManagerInspectComponent', () => {
  let component: ParkManagerInspectComponent;
  let fixture: ComponentFixture<ParkManagerInspectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkManagerInspectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkManagerInspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

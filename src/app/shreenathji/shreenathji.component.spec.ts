import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShreenathjiComponent } from './shreenathji.component';

describe('ShreenathjiComponent', () => {
  let component: ShreenathjiComponent;
  let fixture: ComponentFixture<ShreenathjiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShreenathjiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShreenathjiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

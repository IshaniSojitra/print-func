import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WellsandComponent } from './wellsand.component';

describe('WellsandComponent', () => {
  let component: WellsandComponent;
  let fixture: ComponentFixture<WellsandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WellsandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WellsandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewWellsandComponent } from './preview-wellsand.component';

describe('PreviewWellsandComponent', () => {
  let component: PreviewWellsandComponent;
  let fixture: ComponentFixture<PreviewWellsandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewWellsandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewWellsandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

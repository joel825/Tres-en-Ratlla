import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaulellComponent } from './taulell.component';

describe('TaulellComponent', () => {
  let component: TaulellComponent;
  let fixture: ComponentFixture<TaulellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaulellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaulellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

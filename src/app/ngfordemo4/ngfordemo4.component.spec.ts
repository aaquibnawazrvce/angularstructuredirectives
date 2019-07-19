import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngfordemo4Component } from './ngfordemo4.component';

describe('Ngfordemo4Component', () => {
  let component: Ngfordemo4Component;
  let fixture: ComponentFixture<Ngfordemo4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ngfordemo4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ngfordemo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

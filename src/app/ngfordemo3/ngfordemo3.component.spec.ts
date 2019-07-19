import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngfordemo3Component } from './ngfordemo3.component';

describe('Ngfordemo3Component', () => {
  let component: Ngfordemo3Component;
  let fixture: ComponentFixture<Ngfordemo3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ngfordemo3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ngfordemo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

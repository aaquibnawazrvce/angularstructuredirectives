import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngfordemo2Component } from './ngfordemo2.component';

describe('Ngfordemo2Component', () => {
  let component: Ngfordemo2Component;
  let fixture: ComponentFixture<Ngfordemo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ngfordemo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ngfordemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

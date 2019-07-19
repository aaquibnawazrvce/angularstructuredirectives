import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nffordemo1Component } from './nffordemo1.component';

describe('Nffordemo1Component', () => {
  let component: Nffordemo1Component;
  let fixture: ComponentFixture<Nffordemo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nffordemo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nffordemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

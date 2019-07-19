/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ngifdemo3Component } from './ngifdemo3.component';

describe('Ngifdemo3Component', () => {
  let component: Ngifdemo3Component;
  let fixture: ComponentFixture<Ngifdemo3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ngifdemo3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ngifdemo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

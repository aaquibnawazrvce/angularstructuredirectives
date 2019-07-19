/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ngifdemo2Component } from './ngifdemo2.component';

describe('Ngifdemo2Component', () => {
  let component: Ngifdemo2Component;
  let fixture: ComponentFixture<Ngifdemo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ngifdemo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ngifdemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

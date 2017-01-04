/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TableuComponent } from './tableu.component';

describe('TableuComponent', () => {
  let component: TableuComponent;
  let fixture: ComponentFixture<TableuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

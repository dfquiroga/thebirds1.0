import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AveagregarPage } from './aveagregar.page';

describe('AveagregarPage', () => {
  let component: AveagregarPage;
  let fixture: ComponentFixture<AveagregarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AveagregarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AveagregarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

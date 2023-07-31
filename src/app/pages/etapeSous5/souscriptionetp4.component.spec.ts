import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Souscriptionetp4Component } from './souscriptionetp4.component';

describe('Souscriptionetp4Component', () => {
  let component: Souscriptionetp4Component;
  let fixture: ComponentFixture<Souscriptionetp4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Souscriptionetp4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Souscriptionetp4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Souscriptionetp2Component } from './souscriptionetp2.component';

describe('Souscriptionetp2Component', () => {
  let component: Souscriptionetp2Component;
  let fixture: ComponentFixture<Souscriptionetp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Souscriptionetp2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Souscriptionetp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Souscriptionetp3Component } from './souscriptionetp3.component';

describe('Souscriptionetp3Component', () => {
  let component: Souscriptionetp3Component;
  let fixture: ComponentFixture<Souscriptionetp3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Souscriptionetp3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Souscriptionetp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

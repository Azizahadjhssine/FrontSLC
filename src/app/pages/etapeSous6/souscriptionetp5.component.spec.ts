import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Souscriptionetp5Component } from './souscriptionetp5.component';

describe('Souscriptionetp5Component', () => {
  let component: Souscriptionetp5Component;
  let fixture: ComponentFixture<Souscriptionetp5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Souscriptionetp5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Souscriptionetp5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

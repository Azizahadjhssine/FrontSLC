import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAssureComponent } from './home-assure.component';

describe('HomeAssureComponent', () => {
  let component: HomeAssureComponent;
  let fixture: ComponentFixture<HomeAssureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAssureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAssureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileHomeAssureComponent } from './profile-home-assure.component';

describe('ProfileHomeAssureComponent', () => {
  let component: ProfileHomeAssureComponent;
  let fixture: ComponentFixture<ProfileHomeAssureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileHomeAssureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileHomeAssureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtapEmailComponent } from './etap-email.component';

describe('EtapEmailComponent', () => {
  let component: EtapEmailComponent;
  let fixture: ComponentFixture<EtapEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtapEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtapEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

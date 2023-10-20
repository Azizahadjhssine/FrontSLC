import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtapeOffresComponent } from './etape-offres.component';

describe('EtapeOffresComponent', () => {
  let component: EtapeOffresComponent;
  let fixture: ComponentFixture<EtapeOffresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtapeOffresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtapeOffresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

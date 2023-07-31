import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAffaireByAssureComponent } from './detail-affaire-by-assure.component';

describe('DetailAffaireByAssureComponent', () => {
  let component: DetailAffaireByAssureComponent;
  let fixture: ComponentFixture<DetailAffaireByAssureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailAffaireByAssureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailAffaireByAssureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

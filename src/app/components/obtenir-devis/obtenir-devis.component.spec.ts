import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtenirDevisComponent } from './obtenir-devis.component';

describe('ObtenirDevisComponent', () => {
  let component: ObtenirDevisComponent;
  let fixture: ComponentFixture<ObtenirDevisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObtenirDevisComponent]
    });
    fixture = TestBed.createComponent(ObtenirDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarColoredComponent } from './navbar-colored.component';

describe('NavbarColoredComponent', () => {
  let component: NavbarColoredComponent;
  let fixture: ComponentFixture<NavbarColoredComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarColoredComponent]
    });
    fixture = TestBed.createComponent(NavbarColoredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalContactComponent } from './modal-contact.component';

describe('ModalContactComponent', () => {
  let component: ModalContactComponent;
  let fixture: ComponentFixture<ModalContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalContactComponent]
    });
    fixture = TestBed.createComponent(ModalContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

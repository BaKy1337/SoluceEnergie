import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AidesComponent } from './aides.component';

describe('AidesComponent', () => {
  let component: AidesComponent;
  let fixture: ComponentFixture<AidesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AidesComponent]
    });
    fixture = TestBed.createComponent(AidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

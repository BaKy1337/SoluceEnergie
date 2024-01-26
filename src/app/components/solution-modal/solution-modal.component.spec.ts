import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionModalComponent } from './solution-modal.component';

describe('SolutionModalComponent', () => {
  let component: SolutionModalComponent;
  let fixture: ComponentFixture<SolutionModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolutionModalComponent]
    });
    fixture = TestBed.createComponent(SolutionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleAidesComponent } from './article-aides.component';

describe('ArticleAidesComponent', () => {
  let component: ArticleAidesComponent;
  let fixture: ComponentFixture<ArticleAidesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleAidesComponent]
    });
    fixture = TestBed.createComponent(ArticleAidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

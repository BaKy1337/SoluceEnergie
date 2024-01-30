import { NgModule } from '@angular/core';
import { NavigationEnd, Router, RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { AidesComponent } from './pages/aides/aides.component';
import { FaqComponent } from './pages/faq/faq.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ArticleAidesComponent } from './pages/article-aides/article-aides.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { PolitiqueDeConfidentialiteComponent } from './pages/politique-de-confidentialite/politique-de-confidentialite.component';

const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full'},
  { path: 'accueil', component: LandingComponent},
  { path: 'aides-renovation-energetique', component: AidesComponent},
  { path: 'foire-aux-questions', component: FaqComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/article', component: BlogPostComponent },
  { path: 'aides-renovation-energetique/article', component: ArticleAidesComponent },
  { path: 'politique-de-confidentialite', component: PolitiqueDeConfidentialiteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { ServicesComponent } from './components/services/services.component';
import { ObtenirDevisComponent } from './components/obtenir-devis/obtenir-devis.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { PartenairesComponent } from './components/partenaires/partenaires.component';
import { ContactformComponent } from './components/contactform/contactform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AidesComponent } from './pages/aides/aides.component';
import { FaqComponent } from './pages/faq/faq.component';
import { BlogComponent } from './pages/blog/blog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { SolutionModalComponent } from './components/solution-modal/solution-modal.component';
import {MatButtonModule} from '@angular/material/button';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarColoredComponent } from './components/navbar-colored/navbar-colored.component';
import { ArticleAidesComponent } from './pages/article-aides/article-aides.component';
import { ModalContactComponent } from './components/modal-contact/modal-contact.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SolutionsComponent,
    ServicesComponent,
    ObtenirDevisComponent,
    CertificationsComponent,
    PartenairesComponent,
    ContactformComponent,
    FooterComponent,
    NavbarComponent,
    AidesComponent,
    FaqComponent,
    BlogComponent,
    SolutionModalComponent,
    TestimonialsComponent,
    NavbarColoredComponent,
    ArticleAidesComponent,
    ModalContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

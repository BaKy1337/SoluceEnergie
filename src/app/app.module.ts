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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalContactComponent } from './components/modal-contact/modal-contact.component';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { FonctionsglobalesService } from './services/fonctionsglobales.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isNavbarColored!:boolean;
  currentUrl = "";

  constructor(private dialog: MatDialog, private router: Router, public fonctionGlobales: FonctionsglobalesService) {
    this.isNavbarColored = this.fonctionGlobales.isNavbarColored;
    router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        this.currentUrl = event.url;
        if(event.url == "/"){
          document.getElementById('navbarheight')?.classList.remove('navbarheight');
          document.getElementById('navbar')?.classList.remove('navbar__colored');
          this.isNavbarColored = false;
          this.fonctionGlobales.isNavbarColored = false;
        }else{
          document.getElementById('navbarheight')?.classList.add('navbarheight');
          document.getElementById('navbar')?.classList.add('navbar__colored');
          this.isNavbarColored = true;
          this.fonctionGlobales.isNavbarColored = true;
        }
      }
      
    });
  }


  @HostListener('window:scroll', []) onWindowScroll() {
    window.scrollY > 150
      ? !document.getElementById('navbar')?.classList.contains('navbar__scrolled')
        ? document.getElementById('navbar')?.classList.add('navbar__scrolled')
        : ''
      : document.getElementById('navbar')?.classList.contains('navbar__scrolled')
      ? document.getElementById('navbar')?.classList.remove('navbar__scrolled')
      : '';

      if(window.scrollY > 150){
        document.getElementById('navbar')?.classList.contains('navbar__scrolled') ? this.isNavbarColored = false : this.isNavbarColored = true;
      }else if(window.scrollY < 150){
        if(this.currentUrl != '/'){
          document.getElementById('navbar')?.classList.contains('navbar__scrolled') ? this.isNavbarColored = false : this.isNavbarColored = true;
        }
        
      }
  }

  toggleSidebar() {
    document.getElementById('sidebar')!.classList.toggle('opened__sidebar');
  }

  scrollTo(target: string) {
    document.getElementById(target)!.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

  contactForm() {
    this.dialog.open(ModalContactComponent, {
      width: '98svw',
      height: '98svh',
      maxWidth: '100svw',
      maxHeight: '100svh',
      disableClose: false,
      panelClass: 'solution__panel',
    });
  }
}

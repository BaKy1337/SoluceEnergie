import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalContactComponent } from '../modal-contact/modal-contact.component';
import { FonctionsglobalesService } from 'src/app/services/fonctionsglobales.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isNavbarColored!:boolean;
  constructor(public dialog: MatDialog, public fonctionGlobales: FonctionsglobalesService){
    this.isNavbarColored = this.fonctionGlobales.isNavbarColored;
  }


  scrollTo(target:string){
    document.getElementById(target)!.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
      });
  }

  contactForm() {
    this.dialog.open(ModalContactComponent, {
      width: '98svw',
      height:'98svh',
      maxWidth: '100svw',
      maxHeight: '100svh',
      disableClose: false,
      panelClass: 'solution__panel'
    });
  }
}

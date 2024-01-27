import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalContactComponent } from '../modal-contact/modal-contact.component';

@Component({
  selector: 'app-obtenir-devis',
  templateUrl: './obtenir-devis.component.html',
  styleUrls: ['./obtenir-devis.component.scss']
})
export class ObtenirDevisComponent {

  constructor(public dialog: MatDialog){}
  
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

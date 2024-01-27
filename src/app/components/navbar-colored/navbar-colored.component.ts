import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalContactComponent } from '../modal-contact/modal-contact.component';

@Component({
  selector: 'app-navbar-colored',
  templateUrl: './navbar-colored.component.html',
  styleUrls: ['./navbar-colored.component.scss']
})
export class NavbarColoredComponent {

  constructor(public dialog: MatDialog){}

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

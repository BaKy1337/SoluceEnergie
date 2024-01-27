import { Component } from '@angular/core';
import { SolutionModalComponent } from '../solution-modal/solution-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { ModalContactComponent } from '../modal-contact/modal-contact.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  solutions = [
    {
      type : "ces",
      title:"Chauffe-eau solaire"
    },
    {
      type : "cet",
      title:"Chauffe-eau thermodynamique"
    },
    {
      type : "pacae",
      title:"Pompe à chaleur air-eau"
    },
    {
      type : "pacaa",
      title:"Pompe à chaleur air-air"
    },
    {
      type : "combles",
      title:"Isolation des combles"
    },
    {
      type : "cs",
      title:"Chauffage solaire"
    },
    {
      type : "panneaux",
      title:"Panneaux photovoltaïques"
    },
    {
      type : "murs",
      title:"Isolation des murs"
    },
  ]
  constructor(public dialog: MatDialog) {}

  openDialog(solution:string) {
    this.dialog.open(SolutionModalComponent, {
      data: {
        myData: solution,
      },
      width: '98svw',
      height:'98svh',
      maxWidth: '100svw',
      maxHeight: '100svh',
      disableClose: true,
      panelClass: 'solution__panel'
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

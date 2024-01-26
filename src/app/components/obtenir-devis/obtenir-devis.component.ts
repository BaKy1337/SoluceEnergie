import { Component } from '@angular/core';

@Component({
  selector: 'app-obtenir-devis',
  templateUrl: './obtenir-devis.component.html',
  styleUrls: ['./obtenir-devis.component.scss']
})
export class ObtenirDevisComponent {
  scrollTo(target:string){
    document.getElementById(target)!.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
      });
  }
}

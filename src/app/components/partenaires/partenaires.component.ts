import { Component} from '@angular/core';


@Component({
  selector: 'app-partenaires',
  templateUrl: './partenaires.component.html',
  styleUrls: ['./partenaires.component.scss']
})
export class PartenairesComponent {
  
  partenaires = [
    "../../../assets/partenaires/alliantz.svg",
    "../../../assets/partenaires/apsystems.svg",
    "../../../assets/partenaires/ariston.svg",
    "../../../assets/partenaires/atlantic.svg",
    "../../../assets/partenaires/enphase.svg",
    "../../../assets/partenaires/maprimerenov.svg",
    "../../../assets/partenaires/panasonic.svg",
    "../../../assets/partenaires/solaredge.svg",
  ]
}

import { Component} from '@angular/core';


@Component({
  selector: 'app-partenaires',
  templateUrl: './partenaires.component.html',
  styleUrls: ['./partenaires.component.scss']
})
export class PartenairesComponent {
  partenaires = [
    {
      img:"../../../assets/partenaires/ALLIANTZ.png",
      alt:"Alliantz",
      link:"https://alliantz.fr/"
    },
    {
      img:"../../../assets/partenaires/APSYSTEMS.png",
      alt:"ApSystems",
      link:"https://emea.apsystems.com/fr/"
    },
    {
      img:"../../../assets/partenaires/ARISTON.png",
      alt:"Ariston",
      link:"https://www.ariston.com/fr-fr/"
    },
    {
      img:"../../../assets/partenaires/ATLANTIC.png",
      alt:"Atlantic",
      link:"https://www.atlantic.fr/"
    },
    {
      img:"../../../assets/partenaires/DAIKIN.png",
      alt:"DAIKIN",
      link:"https://www.daikin.fr/fr_fr/residentiel.html"
    },
    {
      img:"../../../assets/partenaires/ENPHASE.png",
      alt:"ENPHASE",
      link:"https://enphase.com/fr-fr"
    },
    {
      img:"../../../assets/partenaires/HEIWA.png",
      alt:"HEIWA",
      link:"https://www.heiwa-france.com/fr/"
    },
    {
      img:"../../../assets/partenaires/MAPRIMERENOV.png",
      alt:"Maprimerénov'",
      link:"https://www.maprimerenov.gouv.fr/"
    },
    {
      img:"../../../assets/partenaires/MITSUBISHI.png",
      alt:"MITSUBISHI",
      link:"https://confort.mitsubishielectric.fr/"
    },
    {
      img:"../../../assets/partenaires/PANASONIC.png",
      alt:"Panasonic",
      link:"https://www.panasonic.com/fr/"
    },
    {
      img:"../../../assets/partenaires/QCELLS.png",
      alt:"QCELLS",
      link:"https://www.q-cells.fr/"
    },
    {
      img:"../../../assets/partenaires/SOLAREDGE.png",
      alt:"SolarEdge",
      link:"https://www.solaredge.com/fr"
    },
    {
      img:"../../../assets/partenaires/TOSHIBA.png",
      alt:"Toshiba",
      link:"https://www.toshiba.fr/"
    },
    {
      img:"../../../assets/partenaires/TRINASOLAR.png",
      alt:"Trina Solar",
      link:"https://www.trinasolar.com/fr"
    },
  ];

  
}

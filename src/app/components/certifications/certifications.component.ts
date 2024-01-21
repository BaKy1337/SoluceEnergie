import { Component } from '@angular/core';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent {

  qualifications = [
    {
      img: "../../../assets/certifs/qualisol.png",
      alt: "RGE_qualisol"
    },
    {
      img: "../../../assets/certifs/qualipac.png",
      alt: "RGE_qualipac"
    },
    {
      img: "../../../assets/certifs/qualipv.png",
      alt: "RGE_qualipv"
    },
    {
      img: "../../../assets/certifs/logo_Ventillation_2024_RGE.png",
      alt: "RGE_Ventillation_2024"
    },
    {
      img: "../../../assets/certifs/qualibat.png",
      alt: "RGE_qualibat"
    }
  ]
}

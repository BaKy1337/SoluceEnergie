import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  listServices = [
    {
      icon : '../../../assets/icons/messages.svg',
      alt:"icone de contact",
      title : "Contact",
      text : "Un de nos chargés de projet prend contact avec vous afin de convenir d’un rendez-vous",
    },
    {
      icon : '../../../assets/icons/lamp-charge.svg',
      alt:"icone d'une ampoule",
      title : "Audit énergétique",
      text : "Notre chargé de projet vient à votre rencontre afin d’étudier vos consommations, effectuer un diagnostic thermique et vous indiquer les différentes solutions pour répondre à vos besoins",
    },
    {
      icon : '../../../assets/icons/status-up.svg',
      alt:"icone d'évoltuion positive",
      title : "Bureau d’études",
      text : "La solution retenue pour votre projet sera analysée par notre bureau d’études afin de s’assurer de sa rentabilité pour vos besoins",
    },
    {
      icon : '../../../assets/icons/note.svg',
      alt:"icone de gestion administrative",
      title : "Gestion administrative",
      text : "Notre service administratif s’occupe de toutes les démarches pour vous (autorisation mairie, subventions, consuel..)",
    },
    {
      icon : '../../../assets/icons/setting.svg',
      alt:"icone d'installation",
      title : "Installation",
      text : "Nos  techniciens salariés évaluent le site, vérifient la faisabilité et s’occupent de votre installation et de la mise en service",
    },
    {
      icon : '../../../assets/icons/health.svg',
      alt:"icone de suivi",
      title : "Suivi",
      text : "Votre chargé de projet assure une surveillance continue de votre installation et reste disponible afin de répondre à toutes vos questions",
    },
  ]
}

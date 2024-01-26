import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {

  testimonials = [
    {
      title: "Marie A.",
      location:"Montpellier, Occitanie",
      text:"Mon installation a près d'un an maintenant. Ma pompe a chaleur est une DAIKIN. Les délais ont étés respectés et les techniciens sont facilement joignables et très courtois. Je recommande"
    },
    {
      title: "Christelle C.",
      location:"Lunel, Occitanie",
      text:"On a choisi soluce energie après plusieurs examens à la maison. Je tiens à dire que leur installateurs sont très respecteux et professionnels. La communication est primordiale pour moi et j'ai été très contente de suivre mon projet de près grâce au suivi. Si vous avez un projet dans les panneaux solaires Foncez !!"
    },
    {
      title: "Gérard C.",
      location:"Frontignan, Occitanie",
      text:"Je voulais mettre une pompe a chaleur et j'ai contacté plusieurs artisans. J'ai choisi soluce energie car Ouahid m'a rassuré avec ses reponses precises. La pompe a chaleur a été installé rapidement par une equipe tres gentille."
    },
  ]
}

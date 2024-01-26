import { Component, ElementRef, ViewChild } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from "keen-slider";
import { SolutionModalComponent } from '../solution-modal/solution-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss'],
})
export class SolutionsComponent {
  @ViewChild("sliderRef") sliderRef!: ElementRef<HTMLElement>

  solutions = [
    {
      img: '../../../assets/solutions/murs.png',
      alt: 'Isolation des murs',
      title: ['Isolation des murs'],
      list: [
        'Jusqu’a 30% d’économie d’énergie',
        'Améliore votre confort',
        'Réduction des nuisances sonores',
        'Eligible aux aides : MaPrimeRenov’, CEE et ECOPTZ',
        'Valorisation de votre bien',
      ],
      type:"murs"
    },
    {
      img: '../../../assets/solutions/chauffe-eau-solaire.png',
      alt: 'Chauffe-eau solaire',
      title: ['Chauffe-eau solaire'],
      list: [
        'Energie propre, renouvelable et gratuite',
        'Jusqu’à 85% d’économie d’énergie',
        'Eligible aux aides : MaPrimeRenov’, CEE et ECOPTZ',
        'Valorisation de votre bien',
      ],
      type:"ces"
    },
    {
      img: '../../../assets/solutions/thermodynamique.png',
      alt: 'Chauffe-eau thermodynamique',
      title: ['Chauffe-eau thermodynamique'],
      list: [
        'Energie propre, renouvelable et gratuite',
        'Jusqu’à 70% d’économie d’énergie',
        'Connecté et pilotable a distance',
        'Eligible aux aides : MaPrimeRenov’, CEE et ECOPTZ',
        'Valorisation de votre bien',
      ],
      type:"cet"
    },
    {
      img: '../../../assets/solutions/aireau.png',
      alt: 'Pompe à chaleur air eau',
      title: ['Pompe à chaleur air eau'],
      list: [
        'En remplacement de chaudière gaz ou fioul',
        'Energie propre, renouvelable et gratuite',
        'Combinable avec un chauffage solaire',
        'Production de chauffage, eau chaude sanitaire et rafraichissement',
        'Jusqu’à 80% d’économie d’énergie',
        'Connectée et pilotable a distance',
        'Eligible aux aides : MaPrimeRenov’, CEE et ECOPTZ',
        'Valorisation de votre bien',
      ],
      type:"pacae"
    },
    {
      img: '../../../assets/solutions/combles.png',
      alt: 'Isolation des combles',
      title: ['Isolation des combles'],
      list: [
        'Jusqu’a 30% d’économie d’énergie',
        'Améliore votre confort',
        'Réduction des nuisances sonores',
        'Eligible aux aides : MaPrimeRenov’, CEE et ECOPTZ',
        'Valorisation de votre bien',
      ],
      type:"combles"
    },
    {
      img: '../../../assets/solutions/chauffage-solaire.png',
      alt: 'Chauffage solaire',
      title: ['Chauffage solaire'],
      list: [
        'En remplacement de chaudière gaz ou fioul',
        'Energie propre, renouvelable et gratuite',
        'Combinable avec une pompe a chaleur air/eau',
        'Production de chauffage et d’eau chaude sanitaire',
        'Jusqu’a 85% d’économie d’énergie',
        'Eligible aux aides : MaPrimeRenov’, CEE et ECOPTZ',
        'Valorisation de votre bien',
      ],
      type:"cs"
    },
    {
      img: '../../../assets/solutions/airair.png',
      alt: 'Pompe à chaleur air air',
      title: ['Pompe à chaleur air air'],
      list: [
        'En remplacement de radiateurs électriques',
        'Energie propre, renouvelable et gratuite',
        'Du chauffage en hiver, du rafraîchissement en été',
        'Amélioration de la qualité de l’air',
        'Jusqu’a 70% d’économie d’énergie',
        'Valorisation de votre bien',
      ],
      type:"pacaa"
    },
    {
      img: '../../../assets/solutions/photovoltaiques.png',
      alt: 'Panneaux photovoltaïques',
      title: ['Panneaux photovoltaïques'],
      list: [
        'Energie propre, renouvelable et gratuite',
        'Production d’électricité en autoconsommation',
        'Revente de surplus',
        'Jusqu’a 80% d’économie d’énergie',
        'Eligible aux aides : Prime a l’autoconsommation',
        'Garantie de 25 ans',
        'Valorisation de votre bien',
      ],
      type:"panneaux"
    },
  ];

  slider!: KeenSliderInstance;
  currentSlide: number = 1;

  constructor(public dialog: MatDialog) {}

  ngAfterViewInit() {

    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      initial: this.currentSlide,
      loop: true,
      breakpoints: {
        "(min-width: 500px)": {
          slides: { perView: 1.5, spacing: 16, origin: "center" },
        },
        "(min-width: 620px)": {
          slides: { perView: 1.8, spacing: 16, origin: "center" },
        },
        "(min-width: 728px)": {
          slides: { perView: 2, spacing: 16, origin: "center" },
        },
        "(min-width: 800px)": {
          slides: { perView: 2.25, spacing: 32, origin: "center" },
        },
        "(min-width: 900px)": {
          slides: { perView: 2.5, spacing: 32, origin: "center" },
        },
        "(min-width: 986px)": {
          slides: { perView: 2.8, spacing: 32, origin: "center" },
        },
        "(min-width: 1100px)": {
          slides: { perView: 3.2, spacing: 32, origin: "center" },
        },
        "(min-width: 1300px)": {
          slides: { perView: 3.5, spacing: 32, origin: "center" },
        },
        "(min-width: 1500px)": {
          slides: { perView: 4.2, spacing: 32, origin: "center" },
        },
        "(min-width: 1600px)": {
          slides: { perView: 4.8, spacing: 32, origin: "center" },
        },
        "(min-width: 1920px)": {
          slides: { perView: 5.25, spacing: 32, origin: "center" },
        },
        
      },
      slides: { perView: 1.2, spacing: 16, origin: "center" },
      slideChanged: (s) => {
        this.currentSlide = s.track.details.rel
      },
    })
  }

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

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  faqLeftCol:any = [];
  faqRightCol:any = [];

  isExpanded: boolean[] = [];

  apiResponse:any;
  constructor(private contentfulApi: ContentfulService,){}

  ngOnInit() {
    this.contentfulApi.getFaq().subscribe((data: any) => {
      this.apiResponse = data;
      data.items.forEach((entry:any, index:number) => {
        if (index % 2 === 0) {
          this.faqLeftCol.push(entry);
        } else {
          this.faqRightCol.push(entry);
        }
      });
    });
  }

  ngAfterViewChecked(){
    this.isExpanded = new Array(this.faqLeftCol.length).fill(false);
  }

  toggleAccordion(index: number) {
    this.isExpanded[index] = !this.isExpanded[index];
  }

  onOpened(index: number) {
    // Ajoutez des actions spécifiques à l'ouverture de l'accordéon si nécessaire
  }

  onClosed(index: number) {
    // Ajoutez des actions spécifiques à la fermeture de l'accordéon si nécessaire
  }
}

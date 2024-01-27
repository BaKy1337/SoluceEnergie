import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-aides',
  templateUrl: './article-aides.component.html',
  styleUrls: ['./article-aides.component.scss']
})
export class ArticleAidesComponent {
  aide:any;

  estGras(marks: any[]): boolean {
    return marks && marks.some(mark => mark.type === 'bold');
  }

  constructor(private route: ActivatedRoute){
    this.route.queryParams.subscribe(params => {
      this.aide = JSON.parse(params['data'] || '{}');
    });
  }

}

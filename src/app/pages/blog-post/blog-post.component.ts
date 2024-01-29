import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent {
  selectedPost: any;

  constructor(
    private route: ActivatedRoute
  ){}

  ngOnInit() {
    this.selectedPost = {
      title: this.route.snapshot.queryParamMap.get('title'),
      contenu: this.route.snapshot.queryParamMap.get('contenu'),
      image: this.route.snapshot.queryParamMap.get('image'),
    };
  }

}

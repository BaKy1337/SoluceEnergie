import { Component, OnInit } from '@angular/core';
import { ContentfulService } from 'src/app/services/contentful.service';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import shave from 'shave';
import { Router } from '@angular/router';

interface ContenuBlog {
  title : String;
  contenu : any;
  image : any;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  apiResponse:any;
  loading: boolean = true;

  listPosts: ContenuBlog[] = [];

  constructor(
    public contentfulApi : ContentfulService,
    private router: Router
  ){}

  ngOnInit() {
    setTimeout(()=>{
        
    }, 10000)
    this.contentfulApi.getBlog().subscribe((data: any) => {
      this.apiResponse = data;
      let promises = [];
      for (let item of data.items) {
        promises.push(this.contentfulApi.getAsset(item.fields.image.sys.id).then(result => {
          let content = this._returnHtmlFromRichText(item.fields.contenu);
          let image = result;
          this.listPosts.push({ title: item.fields.titre, contenu: content, image: image });
        }));
      }
      

      // Utilisation de Promise.all pour attendre que toutes les promesses soient résolues
      Promise.all(promises).then(() => {
        // Désactivez la variable de chargement une fois la boucle terminée
        this.loading = false;
        console.log(this.listPosts);
      });
    });
  }

  
  ngAfterViewChecked(){
    
    shave(".shaveContent", 100)
  }

  _returnHtmlFromRichText(richText:any) {
    if (richText === undefined || richText === null || richText.nodeType !== 'document') {
      return '<p>Error</p>';
    }
    return documentToHtmlString(richText);
    
}
  

openPost(article:any){
  this.router.navigate(['/blog/article'], { queryParams: { title: article.title, contenu: article.contenu, image: article.image } });
  
}

}

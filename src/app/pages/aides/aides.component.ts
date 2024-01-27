import { Component, OnInit } from '@angular/core';
import { ContentfulService } from 'src/app/services/contentful.service';
import shave from 'shave';
import { MatDialog } from '@angular/material/dialog';
import { ModalContactComponent } from 'src/app/components/modal-contact/modal-contact.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aides',
  templateUrl: './aides.component.html',
  styleUrls: ['./aides.component.scss'],
})
export class AidesComponent implements OnInit {
  aidesLeftCol:any = [];
  aidesRightCol:any = [];
  apiResponse:any;

  estGras(marks: any[]): boolean {
    return marks && marks.some(mark => mark.type === 'bold');
  }


  constructor(
    private contentfulApi: ContentfulService,
    public dialog: MatDialog,
    private router: Router
    ) {}

  ngOnInit() {
    this.contentfulApi.getAides().subscribe((data: any) => {
      this.apiResponse = data;
      data.items.forEach((entry:any, index:number) => {
        if (index % 2 === 0) {
          this.aidesLeftCol.push(entry);
        } else {
          this.aidesRightCol.push(entry);
        }
      });
    });
  }

  ngAfterViewChecked(){
    shave(".shaveContent", 150)
  }

  contactForm() {
    this.dialog.open(ModalContactComponent, {
      width: '98svw',
      height:'98svh',
      maxWidth: '100svw',
      maxHeight: '100svh',
      disableClose: false,
      panelClass: 'solution__panel'
    });
  }

  seeArticle(data:any){
    this.router.navigate(['/aides-renovation-energetique/article'], { queryParams: { data: JSON.stringify(data) } });
  }
}

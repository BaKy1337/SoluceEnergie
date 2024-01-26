import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  @HostListener("window:scroll", []) onWindowScroll() {
    if(window.scrollY > 150){
      if (!document.getElementById('scrollToTop')?.classList.contains("active")) {
        document.getElementById('scrollToTop')?.classList.add('active')
      }
    }else{
      if (document.getElementById('scrollToTop')?.classList.contains("active")) {
        document.getElementById('scrollToTop')?.classList.remove('active')
      }
    }
}

  scrollToTop(){
    document.getElementById('heroSection')!.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
      });
  }

  scrollTo(target:string){
    document.getElementById(target)!.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
      });
  }

}

import { Component, HostListener } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: '/app.component.html',
  styleUrls: ['/app.component.scss']
})
export class AppComponent {
  title = 'wsei-app';
  navColor: number = 0;

  pageOffset = window.pageYOffset;

  width = window.innerWidth;
  height = window.innerHeight;

  setColor() {
    let myColor = {
      active: this.navColor == 0,
      notactive: this.navColor == 1
    };
    return myColor;
  }


@HostListener('window:scroll', ['$event'])
  stickyNavbar(e) {
    if(window.pageYOffset > this.pageOffset) {
      let navbar = document.getElementById("header");
      navbar.classList.add('sticky')
    }
    
    else {
      let navbar = document.getElementById("header");
      navbar.classList.remove('sticky')
    }
  }
}

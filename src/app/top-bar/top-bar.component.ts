import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  LIGHT_ICON_URL = "./assets/light_icon.png";
  DARK_ICON_URL = "./assets/dark_icon.png";
  darkMode = false;
  iconUrl = this.LIGHT_ICON_URL;

  constructor(

    public translate: TranslateService


  ) {

    translate.addLangs(['en','vi']);

    translate.setDefaultLang('en');

  }

  switchLang(lang: string) {

    this.translate.use(lang);

  }

  onclickDarkMode(){
    this.darkMode = !this.darkMode;
    document.body.classList.toggle("dark-theme");
    if(this.darkMode){
      this.iconUrl = this.DARK_ICON_URL;
    } else {
      this.iconUrl = this.LIGHT_ICON_URL;
    }
  }

}

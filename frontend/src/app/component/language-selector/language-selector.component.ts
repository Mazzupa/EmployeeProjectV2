import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css']
})
export class LanguageSelectorComponent implements OnInit{

  currentLang;
  langDetails = {
    en: {
      lang: 'English',
      flag: 'us'
    },
    it: {
      lang: 'Italiano',
      flag: 'it'
    }
  };

  constructor(private translate: TranslateService) {}

  useLanguage(language: string) {

    this.currentLang = this.langDetails[language];

    window.localStorage.setItem('lang', language);
    this.translate.use(language);
  }

  ngOnInit(): void {

    this.currentLang = this.langDetails[this.translate.currentLang];
  }
}

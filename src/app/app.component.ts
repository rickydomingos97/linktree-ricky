import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslateModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'linktree-ricky';

  langs = ['en', 'es', 'pt'];
  currentLang = 'en';

  constructor(private translate: TranslateService) {
    // configure translation service
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang() || 'en';
    this.currentLang = browserLang.match(/en|es|pt/) ? browserLang : 'en';
    translate.use(this.currentLang);
  }

  changeLang(event: Event) {
    const select = event.target as HTMLSelectElement;
    const lang = select?.value || 'en';
    this.currentLang = lang;
    this.translate.use(lang);
  }
}

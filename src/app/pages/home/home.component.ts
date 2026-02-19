import { Component } from '@angular/core';
import { LinksComponent } from '../../components/links/links.component';
import { SocialComponent } from '../../components/social/social.component';
import { AboutMeComponent } from '../../components/about-me/about-me.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [
    LinksComponent,
    SocialComponent,
    AboutMeComponent,
    TranslateModule,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  langs = ['en', 'es', 'pt'];
  currentLang = 'en';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang() || 'en';
    this.currentLang = browserLang.match(/en|es|pt/) ? browserLang : 'en';
    translate.use(this.currentLang);
  }

  changeLang(lang: string) {
    this.currentLang = lang || 'en';
    this.translate.use(this.currentLang);
  }

  downloadCV(): void {
    const link = document.createElement('a');
    link.href = 'assets/cv/Ricky_Domingos_CV.pdf';
    link.download = 'Ricky_Domingos_CV.pdf';
    link.click();
  }
}

import { Component } from '@angular/core';
import { LinksComponent } from '../../components/links/links.component';
import { SocialComponent } from '../../components/social/social.component';
import { AboutMeComponent } from '../../components/about-me/about-me.component';

@Component({
  selector: 'app-home',
  imports: [LinksComponent, SocialComponent, AboutMeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  downloadCV(): void {
    const link = document.createElement('a');
    link.href = 'assets/cv/Ricky_Domingos_CV.pdf';
    link.download = 'Ricky_Domingos_CV.pdf';
    link.click();
  }
}

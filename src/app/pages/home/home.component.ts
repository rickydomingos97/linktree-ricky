import { Component } from '@angular/core';
import { LinksComponent } from '../../components/links/links.component';
import { SocialComponent } from '../../components/social/social.component';
@Component({
  selector: 'app-home',
  imports: [LinksComponent, SocialComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}

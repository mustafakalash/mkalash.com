import { Component } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faLinkedin, faGithub, faBluesky } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-links',
  imports: [FontAwesomeModule],
  templateUrl: './links.component.html',
  styleUrl: './links.component.css'
})
export class LinksComponent {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faLinkedin,
      faGithub,
      faEnvelope,
      faBluesky
    );
  }
  email = atob("bWVAbWthbGFzaC5jb20=");
}

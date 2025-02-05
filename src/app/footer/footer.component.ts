import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinksComponent } from '../links/links.component';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, LinksComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
}

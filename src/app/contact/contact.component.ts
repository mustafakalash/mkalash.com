import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LinksComponent } from '../links/links.component';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, LinksComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
}

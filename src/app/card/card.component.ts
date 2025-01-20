import { Component, Input } from '@angular/core';
import { Card } from './card';
import { CommonModule } from '@angular/common';
import { Lightbox, LightboxModule } from 'ngx-lightbox';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-card',
  imports: [CommonModule, LightboxModule, FontAwesomeModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() card!: Card;
  albums: any[] = [];
  constructor(private _lightbox: Lightbox) {}

  ngOnInit() {
    this.card.images.forEach((image, i) => {
      const src = image;
      const caption = this.card.title + " image " + (i + 1);
      const album = {
        src: src,
        caption: caption
      };
      this.albums.push(album);
    });
  }

  open(index: number): void {
    this._lightbox.open(this.albums, index);
  }
}

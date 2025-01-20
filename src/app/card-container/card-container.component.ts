import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../card/card';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-card-container',
  imports: [CommonModule, CardComponent],
  templateUrl: './card-container.component.html',
  styleUrl: './card-container.component.css'
})
export class CardContainerComponent {
  @Input() cards!: Card[];
}

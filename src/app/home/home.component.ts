import { Component, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  rotationInterval: any;

  constructor(private zone: NgZone) {}
  ngOnInit() {
    this.rotateText();
    this.zone.runOutsideAngular(() => {
      this.rotationInterval = setInterval(() => {
        this.zone.run(() => {
          this.rotateText();
        });
      }, 5000);
    });
  }

  ngOnDestroy() {
    clearInterval(this.rotationInterval);
  }

  rotationPhrases = [
    "a teacher.",
    "a developer.",
    "an engineer.",
    "a lifelong learner.",
    "a problem solver.",
    "a mentor.",
    "a leader.",
    ["a cat lover!", 0.1],
    ["a gamer!", 0.1]
  ]
  remainingPhrases = this.rotationPhrases.slice();
  textRotation = "";
  rotateIn = false;
  fadeOut = false;

  rotateText() {
    let index = Math.floor(Math.random() * this.remainingPhrases.length);
    if (this.remainingPhrases.length === 0) {
      this.remainingPhrases = this.rotationPhrases.slice();
    }

    let phrase = this.remainingPhrases.splice(index, 1)[0];
    if(Array.isArray(phrase)) {
      let chance = phrase[1] as number;
      if(Math.random() < chance) {
        phrase = phrase[0] as string;
      } else {
        this.rotateText();
        return;
      }
    }

    let delay = this.textRotation === "" ? 0 : 900;

    this.rotateIn = false;
    this.fadeOut = true;
    setTimeout(() => {
      this.textRotation = phrase;
      this.fadeOut = false;
      this.rotateIn = true;
    }, delay);
  }
}

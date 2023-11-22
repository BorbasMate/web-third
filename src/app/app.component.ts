import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-third';

  isActive = true;
  changeIsActive() {
    this.isActive = !this.isActive;
  }

  score = 30;
  changeScore() {
    this.score = 80;
  }

  names = ["John","Bill","Mark","Elon"];
}

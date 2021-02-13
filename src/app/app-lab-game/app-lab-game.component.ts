import {Component, Input, OnInit} from '@angular/core';
import {App} from '../app.component';

@Component({
  selector: 'app-app-lab-game',
  templateUrl: './app-lab-game.component.html',
  styleUrls: ['./app-lab-game.component.scss']
})
export class AppLabGameComponent implements OnInit {

  @Input() app!: App;
  isHovered = false;

  constructor() {

  }

  ngOnInit(): void {
  }

}

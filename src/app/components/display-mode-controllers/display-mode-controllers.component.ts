import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Controller } from './controller';

@Component({
  selector: 'app-display-mode-controllers',
  templateUrl: './display-mode-controllers.component.html',
  styleUrls: ['./display-mode-controllers.component.scss']
})
export class DisplayModeControllersComponent implements OnInit {
  @Input() controllers: Array<Controller> = [];
  @Output() onChangeDisplay = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onChangeDisplayMode(display: string) {
    this.onChangeDisplay.emit(display);
  }

}

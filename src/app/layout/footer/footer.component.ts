import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent  {
  createdBy: string = "Krakov.co";
  copyYear: number = new Date().getFullYear();

  constructor() { }

}

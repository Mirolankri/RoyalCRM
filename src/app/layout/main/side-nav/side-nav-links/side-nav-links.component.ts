import { Component, Input } from '@angular/core';

@Component({
  selector: 'side-nav-links',
  templateUrl: './side-nav-links.component.html',
  styleUrls: ['./side-nav-links.component.scss']
})
export class SideNavLinksComponent  {
  @Input() icon: string = '';
  @Input() link: string = '';
  @Input() text: string = '';
}

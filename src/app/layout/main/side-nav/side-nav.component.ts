import { Component } from '@angular/core';
import { SideNavLink } from './side-nav-links/side-nav-link';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  links: SideNavLink[] = [
    {icon: 'fas fa-users', link: 'customers', text: 'costumers'},
    {icon: 'fas fa-address-book', link: 'contacts', text: 'contacts'}
  ]

  constructor() { }
}

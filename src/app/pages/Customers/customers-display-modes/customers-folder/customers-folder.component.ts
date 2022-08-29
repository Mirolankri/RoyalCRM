import { Component, Input } from '@angular/core';
import { Customer } from '../../customer';

@Component({
  selector: 'customers-folder',
  templateUrl: './customers-folder.component.html',
  styles: [
  ]
})
export class CustomersFolderComponent {

  @Input() customers: Array<Customer> = [];

}

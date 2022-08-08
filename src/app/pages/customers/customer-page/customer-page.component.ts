import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomersService } from '../customer.service';

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.scss']
})
export class CustomerPageComponent {

  customers: Array<Customer> = [];

  constructor(CS: CustomersService) {
    this.customers = CS.getAll();
  }

}

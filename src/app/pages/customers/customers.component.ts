import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { CustomersService } from './customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styles: [
  ]
})
export class CustomersComponent {

  customers: Array<Customer> = [
  ];

  constructor(private CS: CustomersService) {
    this.customers = CS.getAll();
  }

  deletecustomer(e:MouseEvent,id:string)
  {
    e.stopPropagation();
    console.log(id);
    this.CS.delete(id)
    

  }

}
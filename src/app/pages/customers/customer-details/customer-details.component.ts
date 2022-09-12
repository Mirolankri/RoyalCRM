import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Customer } from '../customer';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styles: [
  ]
})
export class CustomerDetailsComponent {
  createdAt: any;
  customer: Customer | void = undefined;

  constructor( private AR: ActivatedRoute, private CS: CustomersService ) {}

  ngOnInit(): void {
    this.AR.paramMap.subscribe((param: ParamMap)=>{
      const id = param.get('id');
      this.CS.getCustomer(id!, (customer: Customer) => {
        this.customer = customer;
        this.createdAt = new Date(customer.createdAt?.seconds * 1000)
      });
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styles: [
  ]
})
export class EditCustomerComponent implements OnInit {

  customer: Customer | void = undefined;
  id: string | null = null;
  createdAt: any;

  constructor(private CS: CustomersService, private AR: ActivatedRoute, private router: Router) { }

  onSubmit(customer: Customer){
    customer.createdAt = this.createdAt;
    customer.id = this.id!;
    this.CS.edit(customer);
    this.router.navigate(['/customers']);
  }

  ngOnInit(): void {
    this.AR.paramMap.subscribe((param: ParamMap)=>{
      const id = param.get('id');
      this.id = id;
      this.CS.getCustomer(id!, (customer: Customer) => {
        this.customer = customer;
        this.createdAt = customer.createdAt;
      });
    })
  }

  resetForm(){
    this.CS.getCustomer(this.id!, (customer: Customer) => {
      this.customer = customer;
    })
  }

}

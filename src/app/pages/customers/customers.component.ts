import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/components/search-bar/category';
import { Customer } from './customer';
import { CustomersService } from './customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styles: [
  ]
})
export class CustomersComponent {

  customers: Array<Customer> = [];
  categories:Array<Category> =[{name:'First Name',value:'firstname'},{name:'Last Name',value:'lastname'}];

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
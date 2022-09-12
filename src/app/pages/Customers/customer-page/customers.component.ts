import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/components/search-bar/category';
import { Customer } from '../customer';
import { CustomersService } from '../customers.service';


@Component({
  selector: 'customers-page',
  templateUrl: './customers.component.html',
  styles: [],
})
export class CustomersPageComponent implements OnInit {
  customersData: Array<Customer> = [];
  customers: Array<Customer> = [];
  categories: Array<Category> = [{name: 'first name', value: 'firstName'}, {name: 'last name', value: 'lastName'}];

  constructor(private CS: CustomersService) {  }



  onSearch(array: Customer[]) {
    this.customers = array;
  }

  deleteCustomer(e: MouseEvent, id: string) {
    e.stopPropagation();
    this.CS.delete(id);
    // this.customers = this.CS.getAll();
  }

  ngOnInit(): void {
    // this.customersData = []
    this.customersData = this.CS.getAll();
    // this.customers = this.CS.getAll();
    // console.log(this.customers);
    this.customers = this.customersData
    // this.customers = [...this.customersData];
    
  }
}

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

  ngOnInit(): void {
    this.customersData = this.CS.getAll();
    this.customers = [...this.customersData];
  }

  onSearch(array: Customer[]) {
    this.customers = array;
  }

  deleteCustomer(e: MouseEvent, id: string) {
    e.stopPropagation();
    this.CS.delete(id);
    // this.customers = this.CS.getAll();
  }
}

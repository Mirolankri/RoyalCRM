import { Component, OnInit } from '@angular/core';
import { Controller } from 'src/app/components/display-mode-controllers/controller';
import { Category } from 'src/app/components/search-bar/category';
import { Customer } from '../customer';
import { CustomersService } from '../customers.service';


@Component({
  selector: 'customers-page',
  templateUrl: './customers.component.html',
  styles: [],
})
export class CustomersPageComponent implements OnInit {
  customersRowData: Array<Customer> = [];
  customers: Array<Customer> = [];
  categories: Array<Category> = [{name: 'first name', value: 'firstName'}, {name: 'last name', value: 'lastName'}, {name: 'eMail', value: 'email'}, {name: 'phone number', value: 'phone'}, {name: 'notes', value: 'notes'}];
  controllers: Array<Controller> = [ { icon: 'fa fa-table-list', value: 'table' }, { icon: 'fa fa-folder', value: 'folder' }, { icon: 'fa-solid fa-user', value: 'list' }];
  display: string = 'table';

  constructor(private CS: CustomersService) {  }
  
  onSearch(array: Customer[]) {
    this.customers = array;
  }
  
  deleteCustomer(e: MouseEvent, id: string) {
    e.stopPropagation();
    this.CS.delete(id);
    // this.customers = this.CS.getAll();
  }
  
  // deleteCustomer(array: Array<Customer>) {
  //   this.customersRowData = array;
  //   this.customers = this.customersRowData;
  // }

  onChangeDisplay(display: string) {
    this.display = display;
  }

  ngOnInit(): void {
    this.customersRowData = this.CS.getAll();
    this.customers = this.customersRowData;
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Customer } from '../../customer';
import { CustomersService } from '../../customers.service';

@Component({
  selector: 'customer-table',
  templateUrl: './customer-table.component.html',
  styles: [
  ]
})
export class CustomerTableComponent {

  @Input() customers: Array<Customer> = [];
  @Output() onDeleteCustomer = new EventEmitter();

  constructor(private CS: CustomersService) {
    this.customers = CS.getAll();
  }

  deleteCustomer(e: MouseEvent, id: string) {
    e.stopPropagation();
    this.CS.delete(id);
    this.customers = this.CS.getAll();
    this.onDeleteCustomer.emit(this.customers);
  }

}

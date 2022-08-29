import { Injectable } from '@angular/core';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private customers: Customer[] = [
    {
      id: "1234",
      firstName: "name",
      lastName: "last name",
      email: "user@email.co.il",
      phone: "0500000000",
      createdAt: new Date(),
      address: {
        state: "USA",
        country: "Israel",
        city: "tel Aviv",
        street: "Street name",
        houseNumber: 1,
        zip: 2
      },
      note: "i Have Notes"
    }
  ];

  getAll(): Customer[] {
    return this.customers;
  }

  add(customer: Customer){
    customer.id = String( this.customers.length ) + new Date() + Math.random();
    return this.customers.push(customer);
  }

  delete(id: string){
    let customerIndex = this.customers.findIndex((customer: Customer) => customer.id === id);
    if(customerIndex === -1) return;
    this.customers.splice(customerIndex, 1);
  }

  getCustomer(id: string, cb: Function): Customer | void{
    const customer = this.customers.find((customer: Customer) => customer.id === id);
    return cb(customer);
  }

  edit(customer: Customer){    
    let index =  this.customers.findIndex((customerFromDb) => customerFromDb.id === customer.id);
    if(index === -1) return;
    this.customers[index] = customer;
  }

}

import { Injectable } from '@angular/core';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private customers: Customer[] = [
  {
    id: "1234",
    firstName: "miro",
    lastName: "lankri",
    email: "miro@istoreil.co.il",
    phone: "0542412241",
    createdAt: new Date(),
    address: {
      state: "fdfdf",
      country: "dfdfd",
      city: "fdfd",
      street: "dsds",
      houseNumber: 2
  },
    noote: "dfgd"
    },
    {
      id: "1235",
      firstName: "ben",
      lastName: "krk",
      email: "ben@istoreil.co.il",
      phone: "0542412241",
      createdAt: new Date(),
      address: {
        state: "fdfdf",
        country: "dfdfd",
        city: "fdfd",
        street: "dsds",
        houseNumber: 2
    },
      noote: "dfgd"
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
  getCustomer(id:string)
  {
    
    let customer = this.customers.find((customer:Customer)=> customer.id === id );
    
    if(!customer) return
    return customer
  }
}

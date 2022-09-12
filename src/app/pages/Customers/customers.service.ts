import { Injectable, OnInit } from '@angular/core';
import { addDoc, collection, CollectionReference, deleteDoc, doc, DocumentData, Firestore, getDoc, onSnapshot, serverTimestamp, updateDoc } from '@angular/fire/firestore';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private dbPathName: string = 'customer';
  private customers: Customer[] = [
    {
      id: '1234',
      firstName: 'Ben',
      lastName: 'krakov',
      email: 'mail@gmail.com',
      phone: '050-0000000',
      createdAt: new Date,
      address: {
        country: 'Israel',
        city: 'Tel Aviv',
        street: 'STREET',
        houseNumber: 12,
        zip: 123456,
      },
      note: 'string'
    }
  ];

  collectionRef: CollectionReference<DocumentData> = collection(this.FS, 'customer');
  
  constructor(private FS: Firestore) {}

  getAll() {
    const allCustomers: any = [];
    onSnapshot(this.collectionRef, (snapshotData) => {
      snapshotData.docs.forEach((customer) => {
        allCustomers.push({
          ...customer.data(),
          id: customer.id,
        })
      })
    });
    
    return allCustomers;
  }

  add(customer: Customer, cb: Function){
    customer.createdAt = new Date();
    customer.createdAt = serverTimestamp();
    console.log(customer);
    addDoc(this.collectionRef, customer).then(()=>cb()).catch((error)=>{console.log(error);});
    return;
  }

  delete(id: string){
    const docRef = doc(this.FS, this.dbPathName, id);
    deleteDoc(docRef).catch((error)=>console.log(error));
  }

  async getCustomer(id: string, cb: Function) {
    try{
      const docRef = doc(this.FS, this.dbPathName, id);
      const result = await getDoc(docRef);
      const customer = { ...result.data(), id: result.id }
      // console.log(result.data());
      cb(customer);
    } catch (error) {
      console.log(error);
    }
  }
  
  edit(customer: Customer, id: string, cb: Function){    
    const docRef = doc(this.FS, this.dbPathName, id);
    updateDoc(docRef, {...customer}).then( () => cb() ).catch(error => console.log(error));
  }

  // getAll(): Customer[] {
  //   return this.customers;
  // }

  // add(customer: Customer){
  //   customer.id = String( this.customers.length ) + new Date() + Math.random();
  //   return this.customers.push(customer);
  // }

  // delete(id: string){
  //   let customerIndex = this.customers.findIndex((customer: Customer) => customer.id === id);
  //   if(customerIndex === -1) return;
  //   this.customers.splice(customerIndex, 1);
  // }

  // getCustomer(id: string, cb: Function): Customer | void{
  //   const customer = this.customers.find((customer: Customer) => customer.id === id);
  //   return cb(customer);
  // }

  // edit(customer: Customer){    
  //   let index =  this.customers.findIndex((customerFromDb) => customerFromDb.id === customer.id);
  //   if(index === -1) return;
  //   this.customers[index] = customer;
  // }

}

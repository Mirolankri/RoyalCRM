import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  CollectionReference,
  deleteDoc,
  doc,
  DocumentData,
  Firestore,
  getDoc,
  onSnapshot,
  serverTimestamp,
  updateDoc,
} from '@angular/fire/firestore';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  private customers: Customer[] = [
    {
      id: 'myIdIs1',
      firstName: 'Regular',
      lastName: 'User',
      email: 'user@gmail.com',
      phone: '050-0000000',
      address: {
        country: 'israel',
        city: 'tel-aviv',
        street: 'rotshild',
        houseNumber: 0,
        zip: 1234,
      },
      createdAt: new Date(),
      note: 'a very good customer!',
    },
    {
      id: '2',
      firstName: 'admin',
      lastName: 'User',
      email: 'admin@gmail.com',
      phone: '050-0000000',
      address: {
        country: 'israel',
        city: 'tel-aviv',
        street: 'rotshild',
        houseNumber: 0,
        zip: 1234,
      },
      createdAt: new Date(),
      note: 'a very bad customer!',
    },
  ];
  private pathonFireBase = 'customers'
  collectionRef: CollectionReference<DocumentData> = collection(
    this.FS,
    this.pathonFireBase
  );

   getAll() {
    let customers: any = [];
    console.log(customers);
     onSnapshot(this.collectionRef, (snapShotData) => {

      snapShotData.docs.forEach((customer) => {
        console.log(customer.data());
        
        customers.push({
          ...customer.data(),
          id: customer.id,
        });
      });
    });
    return customers;
  }

  // getAll(): Customer[] {
  //   return this.customers;
  // }

  constructor(private FS: Firestore) {}

  add(customer: Customer,cb:Function) {
    customer.createdAt = new Date();
    customer.createdAt = serverTimestamp();
    addDoc(this.collectionRef,customer)
    .then(()=>cb())
    .catch((err)=>{
      console.log(err);
    })

    // customer.id = String(this.customers.length + 1) + new Date() + Math.random();
    // this.customers.push(customer);
    return;
  }

  async getCustomer(id: string, cb: Function) {
    try {
      const ref = doc(this.FS,this.pathonFireBase,id)
      // console.log(ref);
      const res = await getDoc(ref)
      const customer = {...res.data(),id:res.id}
      console.log(customer);
      
      return cb(customer);

    } catch (error) {
      console.log("err",error);
      
    }

    // const customer = this.customers.find(
    //   (customerFromDb: Customer) => customerFromDb.id === id
    // );
    
  }

  delete(id: string) {
    const ref = doc(this.FS,this.pathonFireBase,id)
    deleteDoc(ref)
    .catch()
    .then((err)=>{
      console.log(err);

    })
  }
  // delete(id: string) {
  //   let customerIndex = this.customers.findIndex(
  //     (customer: Customer) => customer.id === id
  //   );
  //   if (customerIndex === -1) return;
  //   this.customers.splice(customerIndex, 1);
  // }

   edit(customer: Customer,id: string,cb: Function) {
    const ref = doc(this.FS,this.pathonFireBase,id)
    updateDoc(ref,{...customer})
    .then(()=>cb())
    .catch((err)=>{
      console.log(err);
      
    })
    
  }
  // edit(customer: Customer) {
  //   let index = this.customers.findIndex(
  //     (customerFromDb) => customerFromDb.id === customer.id
  //   );
  //   if (index === -1) return;
  //   this.customers[index] = customer;
  // }
}
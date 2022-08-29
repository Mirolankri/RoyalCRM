import { Injectable } from '@angular/core';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private contacts: Contact[] = [
    {
      id: "1234",
      firstName: "Ben",
      lastName: "Krakovsky",
      eMail: "email@address.com",
      birthDay: new Date('June 11, 2020'),
      phone: "050-0000000",
      age: 31,
      address: {
        state: "Israel",
        country: "Israel",
        city: "Tel Aviv",
        street: "Hertzel",
        houseNumber: 15,
        zip: 1234567
      }
    },
    {
      id: "2345",
      firstName: "Miro",
      lastName: "Lankri",
      eMail: "email@address.com",
      birthDay: new Date('June 11, 2020'),
      phone: "050-0000000",
      age: 31,
      address: {
        state: "Israel",
        country: "Israel",
        city: "Tel Aviv",
        street: "Hertzel",
        houseNumber: 15,
        zip: 1234567
      }
    }
  ]

  constructor() { }

  getAll(): Contact[]{
    return this.contacts;
  }

  delete(id: string){
    let contactIndex = this.contacts.findIndex((contact: Contact) => contact.id === id);

    if(contactIndex === -1) return;
    this.contacts.splice(contactIndex, 1);
  }

  getContact(id: string, cb: Function): Contact | void{
    const contact = this.contacts.find((contact: Contact) => contact.id === id);
    return cb(contact);
  }

  addContact(contact: Contact){
    contact.id = String( this.contacts.length ) + new Date().toString + Math.random();
    contact.age = new Date().getFullYear() - new Date(contact.birthDay).getFullYear();    
    return this.contacts.push(contact);
  }

  edit(contact: Contact){
    let index = this.contacts.findIndex((contactFromDb) => { contactFromDb.id === contact.id});
    if(index === -1) return;
    this.contacts[index] = contact;
  }
}

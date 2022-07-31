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
}

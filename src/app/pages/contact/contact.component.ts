import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';

@Component({
  selector: 'pages-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  title = "Contact List";

  contacts: Contact[] = [];

  constructor() {
    this.contacts.push({
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
    });
  }

}

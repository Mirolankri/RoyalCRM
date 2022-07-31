import { Component } from '@angular/core';
import { Contact } from './contact';
import { ContactsService } from './contacts.service';

@Component({
  selector: 'pages-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  title = "Contact List";

  contacts: Contact[] = [];

  constructor(con: ContactsService) {
    this.contacts = con.getAll();
  }

}
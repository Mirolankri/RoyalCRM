import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from '../../contact';
import { ContactsService } from '../../contacts.service';

@Component({
  selector: 'contacts-table',
  templateUrl: './contacts-table.component.html',
  styles: [
  ]
})
export class ContactsTableComponent {

  @Input() contacts: Contact[] = [];
  @Output() onDeleteContacts = new EventEmitter();

  constructor(private CS: ContactsService){
    this.contacts = CS.getAll();
  }

  deleteContact(e: MouseEvent, id: string) {
    e.stopPropagation();
    this.CS.delete(id);
    this.contacts = this.CS.getAll();
    this.onDeleteContacts.emit(this.contacts);
  }

}

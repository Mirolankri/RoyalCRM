import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/components/search-bar/category';
import { Contact } from './contact';
import { ContactsService } from './contacts.service';
import { Controller } from 'src/app/components/display-mode-controllers/controller';

@Component({
  selector: 'pages-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  title = "Contact List";
  contactsRowData: Array<Contact> | void = undefined;
  contacts: Contact[] = [];
  contactsData: Array<Contact> = [];
  categories: Array<Category> = [{name: 'first name', value: 'firstName'}, {name: 'last name', value: 'lastName'}];
  controllers: Array<Controller> = [{ icon: 'fa fa-table-list', value: 'table' }, { icon: 'fa fa-folder', value: 'folder' }];
  display: string = 'table';

  constructor(private CS: ContactsService) { }

  ngOnInit(): void {
    this.contactsData = this.CS.getAll();
    this.contacts = [...this.contactsData];
  }

  deleteContact(e: MouseEvent, id: string){
    e.stopPropagation();
    this.CS.delete(id);
  }

  // deleteContact(array: Array<Contact>) {
  //   this.contactsRowData = array;
  //   this.contacts = this.contactsRowData;
  // }

  onSearch(array: Contact[]){
    this.contacts = array;
  }

  onChangeDisplay(display: string) {
    this.display = display;
  }

}

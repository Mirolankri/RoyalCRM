import { Component, Input, OnInit } from '@angular/core';
import { Customer } from 'src/app/pages/Customers/customer';
import { Contact } from '../../contact';

@Component({
  selector: 'app-contacts-folder',
  templateUrl: './contacts-folder.component.html',
  styles: [
  ]
})
export class ContactsFolderComponent implements OnInit {
  @Input() contacts: Array<Contact> = [];
  constructor() { }

  ngOnInit(): void {
  }

}

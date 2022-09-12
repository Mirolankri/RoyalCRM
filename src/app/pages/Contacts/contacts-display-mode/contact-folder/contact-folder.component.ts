import { Component, Input } from '@angular/core';
import { Contact } from '../../contact';

@Component({
  selector: 'contact-folder',
  templateUrl: './contact-folder.component.html',
  styles: [
  ]
})
export class ContactFolderComponent {

  @Input() contacts: Array<Contact> = [];

}

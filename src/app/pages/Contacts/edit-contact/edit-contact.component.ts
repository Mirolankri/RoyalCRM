import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styles: [
  ]
})
export class EditContactComponent implements OnInit {

  contact: Contact | void = undefined;
  id: string | null = null;

  constructor(private CS: ContactsService, private AR: ActivatedRoute, private router: Router) { }

  onSubmit(contact: Contact){
    contact.id = this.id!;
    this.CS.edit(contact);
    this.router.navigate(['/contacts'])
  }

  ngOnInit(): void {
    this.AR.paramMap.subscribe((param: ParamMap) => {
      const id = param.get('id');
      this.id = id;
      this.CS.getContact(id!, (contact: Contact) => {
        this.contact = contact;
      })
    })
  }

  resetForm(){
    this.CS.getContact(this.id!, (contact: Contact) => {
      this.contact = contact;
    })
  }

}

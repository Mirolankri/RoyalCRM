import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Contact } from '../contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styles: [
  ]
})
export class ContactDetailsComponent implements OnInit {

  contact: Contact | void = undefined;

  constructor( private router: ActivatedRoute, private CS: ContactsService ) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe((param: ParamMap) =>{
      const id = param.get('id');
      const contanct = this.CS.getContact(id!,(contact: Contact | void) => {(this.contact = contact)});
      if(contanct) this.contact = contanct;
    })
  }

}

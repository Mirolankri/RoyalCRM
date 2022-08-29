import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styles: [
  ]
})
export class ContactFormComponent {

  @Output() submit = new EventEmitter();
  @Output() reset = new EventEmitter();

  @Input() contact: Contact ={
    id: '',
    firstName: '',
    lastName: '',
    eMail: '',
    birthDay: new Date(),
    phone: '',
    age: 0,
    address: {
      state: '',
      country: '',
      city: '',
      street: '',
      houseNumber: 0,
      zip: 0
    },
  }

  constructor(private CS: ContactsService, private routerService: Router) { }

  resetForm(form: NgForm){
    form.resetForm();
  }

  onSubmit({ valid, value }: NgForm) {
    if (valid) this.submit.emit(value);
  }

}

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styles: [
  ]
})
export class NewContactComponent {

  constructor(private CS: ContactsService, private routerService: Router) { }

  resetForm(form: NgForm){
    form.resetForm();
  }

  onSubmit({valid, value}: NgForm){
    if(valid){
      this.CS.addContact(value);
      this.routerService.navigate(['/contacts']);
    }
  }

}

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomersService } from '../customer.service';

@Component({
  selector: 'app-newcustomer',
  templateUrl: './newcustomer.component.html',
  styles: [
  ]
})
export class NewcustomerComponent {
  constructor(private routerService: Router,private customersService: CustomersService) { }

  onSubmit({valid, value}: NgForm){
    if(valid){
      this.customersService.add(value);
      console.log(value);
      
      this.routerService.navigate(['/customers']);
    }
  }

  resetForm(form: NgForm){
    form.resetForm();
  }


}

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styles: [
  ]
})
export class NewCustomerComponent {
  
  constructor(private customersService: CustomersService, private routerService: Router) { }

  onSubmit({valid, value}: NgForm){
    if(valid){
      this.customersService.add(value,()=>
        this.routerService.navigate(['/customers'])
      );
    }
  }

  resetForm(form: NgForm){
    form.resetForm();
  }

}

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styles: [
  ]
})
export class SignupPageComponent {

  error: boolean = false;

  constructor(private US: UserService, private router: Router) {  }

  onSubmit(form: NgForm) {
    const {valid, value} = form;
    if(valid){
      this.US.signupWithEmailAndPassword(value, (user: any): any => {
        if(user){
          form.resetForm();
          this.error = false;
          return this.router.navigate(['customers']);
        }
        this.error = true;
        setTimeout(()=>{
          form.resetForm();
          this.error = false;
          this.router.navigate(['']);
        },4000)
      })
    }
  }

  resetForm(form: NgForm){
    form.resetForm();
  }

  signupWithGoogle() {
    this.US.signupAndLoginWithGoogle((user: any): any=>{
      if (user) return this.router.navigate(['/customers']);
    });
  }

}

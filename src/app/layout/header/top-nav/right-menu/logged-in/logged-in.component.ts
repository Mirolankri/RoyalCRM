import { Component } from '@angular/core';
import { UserService } from 'src/app/pages/Users/user.service';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.scss']
})
export class LoggedInComponent {

  constructor(private US:UserService) { }

  logout(){
    this.US.logout();
  }

}

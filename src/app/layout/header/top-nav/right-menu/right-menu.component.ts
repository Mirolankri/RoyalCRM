import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/pages/Users/user.service';

@Component({
  selector: 'right-menu',
  templateUrl: './right-menu.component.html',
  styleUrls: ['./right-menu.component.scss']
})
export class RightMenuComponent implements OnInit {
  user: any;

  constructor(private US: UserService) { }

  ngOnInit(): void {
    this.US.getUserStatus((user: any) => this.user = user);
  }

}

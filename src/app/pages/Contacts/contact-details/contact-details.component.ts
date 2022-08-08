import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Contact } from '../contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  contact : Contact | void = undefined;
  constructor(private router:ActivatedRoute ,private con:ContactsService) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe((param:ParamMap)=>{
      const id = param.get('id')
      console.log("id - >",id);
      this.contact= this.con.getContact(id!)
      
      
    })

  }

}

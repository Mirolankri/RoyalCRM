import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Customer } from '../customer';
import { CustomersService } from '../customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

  customer : Customer | void = undefined;

  constructor(private router:ActivatedRoute,private CS:CustomersService)
  {
    
    // console.log(id);
    

  }
  
  ngOnInit(): void {
    this.router.paramMap.subscribe((param:ParamMap)=>{
      const id = param.get('id')
      console.log("id - >",id);
      this.customer= this.CS.getCustomer(id!);
      
      
    })
  }

}

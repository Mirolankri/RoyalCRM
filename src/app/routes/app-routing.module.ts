import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../pages/about/about.component';
import { ContactDetailsComponent } from '../pages/Contacts/contact-details/contact-details.component';
import { ContactComponent } from '../pages/Contacts/contact.component';
import { EditContactComponent } from '../pages/Contacts/edit-contact/edit-contact.component';
import { NewContactComponent } from '../pages/Contacts/new-contact/new-contact.component';
import { CustomerDetailsComponent } from '../pages/Customers/customer-details/customer-details.component';
import { CustomersPageComponent } from '../pages/Customers/customer-page/customers.component';
import { EditCustomerComponent } from '../pages/Customers/edit-customer/edit-customer.component';
import { NewCustomerComponent } from '../pages/Customers/new-customer/new-customer.component';
import { ErrorPageComponent } from '../pages/Error-page/error-page.component';
import { LoginPageComponent } from '../pages/login-page/login-page.component';
import { LogoutComponent } from '../pages/logout/logout.component';
import { SignupComponent } from '../pages/signup/signup.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  // **** Side Nav Bar ****
  { path: 'contacts', component: ContactComponent },
  { path: 'contacts/new-contact', component: NewContactComponent },
  { path: 'contacts/contact-details/:id', component: ContactDetailsComponent },
  { path: 'contacts/edit-contact/:id', component: EditContactComponent },
  // **** Top Nav Bar ****
  { path: 'about', component: AboutComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'customers', component: CustomersPageComponent },
  { path: 'customers/new-customer', component: NewCustomerComponent },
  { path: 'customers/customer-details/:id', component: CustomerDetailsComponent },
  { path: 'customers/edit-customer/:id', component: EditCustomerComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginPageComponent },
  // **** Error Page ****
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

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
import { SignupPageComponent } from '../pages/Users/signup-page/signup-page.component';
import { AuthGuard } from './auth.guard';
import { LoggedGuard } from './logged.guard';

const routes: Routes = [
  // { path: '', component: LoginPageComponent,canActivate: [LoggedGuard] },
  { path: '', component: LoginPageComponent,canActivate: [LoggedGuard] },
  // **** Side Nav Bar ****
  { path: 'contacts', component: ContactComponent, canActivate: [AuthGuard] },
  { path: 'contacts/new-contact', component: NewContactComponent, canActivate: [AuthGuard] },
  { path: 'contacts/contact-details/:id', component: ContactDetailsComponent, canActivate: [AuthGuard] },
  { path: 'contacts/edit-contact/:id', component: EditContactComponent, canActivate: [AuthGuard] },
  // **** Top Nav Bar ****
  { path: 'about', component: AboutComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'customers', component: CustomersPageComponent, canActivate: [AuthGuard] },
  { path: 'customers/new-customer', component: NewCustomerComponent, canActivate: [AuthGuard] },
  { path: 'customers/customer-details/:id', component: CustomerDetailsComponent, canActivate: [AuthGuard] },
  { path: 'customers/edit-customer/:id', component: EditCustomerComponent, canActivate: [AuthGuard] },
  // { path: 'signup', component: SignupComponent },
  { path:'signup', component: SignupPageComponent,canActivate: [LoggedGuard] },
  { path: 'login', component: LoginPageComponent,canActivate: [LoggedGuard] },
  // { path:'signup', component: SignupPageComponent,canActivate: [LoggedGuard] },
  // { path: 'login', component: LoginPageComponent,canActivate: [LoggedGuard] },
  // **** Error Page ****
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

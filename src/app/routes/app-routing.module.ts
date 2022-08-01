import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../pages/about/about.component';
import { ContactComponent } from '../pages/Contacts/contact.component';
import { ErrorPageComponent } from '../pages/Error-page/error-page.component';
import { LoginPageComponent } from '../pages/login-page/login-page.component';
import { LogoutComponent } from '../pages/logout/logout.component';
import { SignupComponent } from '../pages/signup/signup.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'login', component: LoginPageComponent },
  // **** Side Nav Bar ****
  { path: 'contacts', component: ContactComponent },
  // **** Top Nav Bar ****
  { path: 'about', component: AboutComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'signup', component: SignupComponent },
  // **** Error Page ****
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

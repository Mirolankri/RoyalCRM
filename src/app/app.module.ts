import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './root/app.component';
import { DecoratorsComponent } from './components/decorators/decorators.component';
import { ContactComponent } from './pages/Contacts/contact.component';
import { ErrorPageComponent } from './pages/Error-page/error-page.component';
import { AboutComponent } from './pages/about/about.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { HeaderComponent } from './Layout/header/header.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { MainComponent } from './Layout/main/main.component';
import { SideNavComponent } from './Layout/main/side-nav/side-nav.component';
import { LogoComponent } from './Layout/header/top-nav/logo/logo.component';
import { HamburgerComponent } from './Layout/header/top-nav/hamburger/hamburger.component';
import { RightMenuComponent } from './Layout/header/top-nav/right-menu/right-menu.component';
import { LeftMenuComponent } from './Layout/header/top-nav/left-menu/left-menu.component';
import { LoggedInComponent } from './Layout/header/top-nav/right-menu/logged-in/logged-in.component';
import { LoginComponent } from './Layout/header/top-nav/right-menu/login/login.component';
import { SideNavLinksComponent } from './Layout/main/side-nav/side-nav-links/side-nav-links.component';
import { FormsModule } from '@angular/forms';
import { TextCapitalPipe } from './pipes/text-capital.pipe';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NewCustomerComponent } from './pages/Customers/new-customer/new-customer.component';
import { CustomersPageComponent } from './pages/Customers/customer-page/customers.component';
import { CustomerFormComponent } from './pages/Customers/customer-form/customer-form.component';
import { CustomerDetailsComponent } from './pages/Customers/customer-details/customer-details.component';
import { ContactDetailsComponent } from './pages/Contacts/contact-details/contact-details.component';
import { NewContactComponent } from './pages/Contacts/new-contact/new-contact.component';
import { EditCustomerComponent } from './pages/Customers/edit-customer/edit-customer.component';
import { EditContactComponent } from './pages/Contacts/edit-contact/edit-contact.component';
import { ContactFormComponent } from './pages/Contacts/contact-form/contact-form.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CustomersFolderComponent } from './pages/Customers/customers-display-modes/customers-folder/customers-folder.component';
import { DisplayModeControllersComponent } from './components/display-mode-controllers/display-mode-controllers.component';
import { ContactsTableComponent } from './pages/Contacts/contacts-display-mode/contacts-table/contacts-table.component';
import { CustomerTableComponent } from './pages/Customers/customers-display-modes/customer-table/customer-table.component';
import { ContactFolderComponent } from './pages/Contacts/contacts-display-mode/contact-folder/contact-folder.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { SignupPageComponent } from './pages/Users/signup-page/signup-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SideNavComponent,
    LogoComponent,
    HamburgerComponent,
    RightMenuComponent,
    LeftMenuComponent,
    LoggedInComponent,
    LoginComponent,
    DecoratorsComponent,
    ErrorPageComponent,
    SideNavLinksComponent,
    AboutComponent,
    SignupComponent,
    LogoutComponent,
    PageHeaderComponent,
    TextCapitalPipe,
    LoginPageComponent,
    NewCustomerComponent,
    CustomersPageComponent,
    CustomerFormComponent,
    CustomerDetailsComponent,
    ContactDetailsComponent,
    NewContactComponent,
    EditCustomerComponent,
    EditContactComponent,
    ContactFormComponent,
    SearchBarComponent,
    CustomersFolderComponent,
    DisplayModeControllersComponent,
    ContactsTableComponent,
    CustomerTableComponent,
    ContactFolderComponent,
    SignupPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

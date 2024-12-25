import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './logout-components/main-page/main-page.component';
import { NavbarComponent } from './logout-components/navbar/navbar.component';
import { LoginComponent } from './logout-components/login/login.component';
import { RegisterComponent } from './logout-components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { ResetPasswordComponent } from './logout-components/reset-password/reset-password.component';
import { BookingComponent } from './logout-components/booking/booking.component';
import { ContactComponent } from './logout-components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    BookingComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

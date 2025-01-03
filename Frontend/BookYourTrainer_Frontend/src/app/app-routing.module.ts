import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './logout-components/login/login.component';
import { MainPageComponent } from './logout-components/main-page/main-page.component';
import { RegisterComponent } from './logout-components/register/register.component';
import { ResetPasswordComponent } from './logout-components/reset-password/reset-password.component';
import { BookingComponent } from './logout-components/booking/booking.component';
import { ContactComponent } from './logout-components/contact/contact.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'booking', component: BookingComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'reset-password', component: ResetPasswordComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

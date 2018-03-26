import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';
import { PasswordComponent } from './password/password.component';
import { FullnameComponent } from './fullname/fullname.component';
import { GenderComponent } from './gender/gender.component';
import { RegionComponent } from './region/region.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { SuccessComponent } from './success/success.component'
import { SignupService } from './shared/signup.service';

// router configurations
const routeConfig: Routes = [
  {path: '', redirectTo: 'signup', pathMatch: 'full'},
  {path: 'signup', component: SignupComponent},
  {path: 'success', component: SuccessComponent},
  {path: '**', redirectTo: 'signup'}
]

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    EmailComponent,
    PasswordComponent,
    FullnameComponent,
    GenderComponent,
    RegionComponent,
    BirthdayComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig),
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [SignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }

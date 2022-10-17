import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameSubFormComponent } from './name-sub-form/name-sub-form.component';
import { ContactSubformComponent } from './contact-sub-form/contact-sub-form.component';
import { UserProfileFormComponent} from './user-profile-form/user-profile-form.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    UserProfileFormComponent,
    NameSubFormComponent,
    ContactSubformComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,


  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }

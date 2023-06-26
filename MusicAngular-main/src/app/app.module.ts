import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


import { HomeComponent } from './home/home.component';
import { UserhomepageComponent } from './userhomepage/userhomepage.component';

import { HeaderComponent } from './header/header.component';
import { CreateComponent } from './admin/create/create.component';
import { UpdateComponent } from './admin/update/update.component';
import { RetrieveComponent } from './admin/retrieve/retrieve.component';
import{ HttpClientModule} from'@angular/common/http';

import { AdminhomeComponent } from './adminhome/adminhome.component';
import { ProfileComponent } from './profile/profile.component';
import { DescComponent } from './desc/desc.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    
    
    HomeComponent,
    UserhomepageComponent,
  
    HeaderComponent,
    CreateComponent,
    UpdateComponent,
    RetrieveComponent,
   
    AdminhomeComponent,
        ProfileComponent,
        DescComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { ProfileComponent } from './profile/profile.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './admin/create/create.component';
import { RetrieveComponent } from './admin/retrieve/retrieve.component';
import { UpdateComponent } from './admin/update/update.component';


import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserhomepageComponent } from './userhomepage/userhomepage.component';
import { DescComponent } from './desc/desc.component';

const routes: Routes = [{
  path:'login',
  component:LoginComponent
},
{
  path:'',component:HomeComponent
},
{
  path:'signup',component:SignupComponent
},

{
  path:'userhomepage',component:UserhomepageComponent
},
{
  path:'profile',component:ProfileComponent
},
{
  path:'adminhome',component:AdminhomeComponent
},
{
  path:'retrieve',component:RetrieveComponent
},
{
  path:'create',component:CreateComponent
},
{
  path:'desc',component:DescComponent
},
// {
//   path:'update',component:UpdateComponent
// }
{ path: 'update/:id', component: UpdateComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

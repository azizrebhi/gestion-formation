import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormateurComponent} from "./components/formateur/formateur.component";

import {WelcomeComponent} from "./components/welcome/welcome.component";
import {AddPollComponent} from "./components/add-poll/add-poll.component";
import {PollComponent} from "./components/poll/poll.component";
import {FormCreateComponent} from "./components/create-form/create-form.component";
import {DisplayFormComponent} from "./display-form/display-form.component";
import {FormDetailsComponent} from "./form-details/form-details.component";




const routes: Routes = [
      { path: 'formateur', component: FormateurComponent },
  { path: 'formation', component: FormCreateComponent },
  {path:'feedback' ,component:DisplayFormComponent},
  { path: 'welcome' , component: WelcomeComponent },
  { path: 'poll/:id', component: PollComponent },
  {path:'add-poll',component:AddPollComponent},
  { path: 'form/:id', component: FormDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

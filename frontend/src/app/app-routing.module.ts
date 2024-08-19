import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormateurComponent} from "./components/formateur/formateur.component";
import {FormationComponent} from "./components/formation/formation.component";
import {FeedbackComponent} from "./components/feedback/feedback.component";

import {WelcomeComponent} from "./components/welcome/welcome.component";
import {AddPollComponent} from "./components/add-poll/add-poll.component";
import {PollComponent} from "./components/poll/poll.component";
import {FormCreateComponent} from "./components/create-form/create-form.component";




const routes: Routes = [
      { path: 'formateur', component: FormateurComponent },
  { path: 'formation', component: FormCreateComponent },
  {path:'feedback' ,component:FeedbackComponent},
  { path: 'welcome' , component: WelcomeComponent },
  { path: 'poll/:id', component: PollComponent },
  {path:'add-poll',component:AddPollComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

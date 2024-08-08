import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormateurComponent} from "./components/formateur/formateur.component";
import {FormationComponent} from "./components/formation/formation.component";
import {FeedbackComponent} from "./components/feedback/feedback.component";

import {WelcomeComponent} from "./components/welcome/welcome.component";




const routes: Routes = [
      { path: 'formateur', component: FormateurComponent },
  { path: 'formation', component: FormationComponent },
  {path:'feedback' ,component:FeedbackComponent},
  { path: 'welcome' , component: WelcomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

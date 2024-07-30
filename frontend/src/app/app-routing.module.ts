import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormateurComponent} from "./components/formateur/formateur.component";
import {FormationComponent} from "./components/formation/formation.component";



const routes: Routes = [
      { path: 'formateur', component: FormateurComponent },
  { path: 'formation', component: FormationComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

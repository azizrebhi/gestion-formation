import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormateurComponent} from "./components/formateur/formateur.component";



const routes: Routes = [
      { path: 'formateur', component: FormateurComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

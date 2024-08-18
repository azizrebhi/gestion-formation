import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormationComponent } from './formation/formation.component';
import { SujetComponent } from './sujet/sujet.component';

const routes: Routes = [
  {path:'',component:SujetComponent ,},
  {path:'formation' , component:FormationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

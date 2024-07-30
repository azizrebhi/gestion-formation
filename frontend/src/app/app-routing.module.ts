import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CoursesComponent } from './components/courses/courses.component';
import { FormationComponent } from './components/formation/formation.component';
import { NotFoundComponentComponent } from './components/not-found-component/not-found-component.component';
//import { AddFormationComponent } from './components/formation/CrudFormation/add-formateur/add-formation.component';
import { ListFormationComponent } from './components/formation/CrudFormation/list-formation/list-formation.component';
import { DashboardFormationComponent } from './components/dashboard-formation/dashboard-formation.component';
import { LoginComponent } from './components/Users/login/login.component';
import { RegisterComponent } from './components/Users/register/register.component';
import { HomeFormateurComponent } from './components/Formateur/home-formateur/home-formateur.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'registre', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'homeFormateur', component: HomeFormateurComponent },

  { path: 'courses', component: CoursesComponent},
  //{ path: 'addFormateur', component: AddFormationComponent },
  { path: 'listFormation', component: ListFormationComponent},
  { path: 'formation', component: FormationComponent },
  { path: '404', component: NotFoundComponentComponent },
  { path: '**', component: NotFoundComponentComponent },
  { path: 'Dashboard', component: DashboardFormationComponent },
 

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

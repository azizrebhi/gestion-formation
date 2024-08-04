import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { AddFormationComponent } from './components/formation/CrudFormation/add-formateur/add-formation.component';

import { LoginComponent } from './components/Users/login/login.component';
import { RegisterComponent } from './components/Users/register/register.component';
import { HomeFormateurComponent } from './components/Formateur/home-formateur/home-formateur.component';
import { CalendarComponent } from './components/Formateur/calendar/calendar.component';
import { HomeAdminComponent } from './components/Admin/home-admin/home-admin.component';
import { AuthGuard } from './service/AuthGuard';
import { ListFormateursComponent } from './components/Admin/list-formateurs/list-formateurs.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registre', component: RegisterComponent },
  { path: 'homeAdmin', component: HomeAdminComponent, canActivate: [AuthGuard], data: { role: 'ROLE_ADMIN' } },
  { path: 'homeFormateur', component: HomeFormateurComponent, canActivate: [AuthGuard], data: { role: 'ROLE_FORMATEUR' } },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: '**', component: NotFoundComponentComponent },

  {
    path: 'homeAdmin', component: HomeAdminComponent, children: [
      { path: 'listFormateur', component: ListFormateursComponent },
    ]
  },/*
  // Redirect to homeFormateur as the default route if none is provided
  { path: '', redirectTo: '/login', pathMatch: 'full' },*/
];



  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

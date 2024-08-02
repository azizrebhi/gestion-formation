import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { AddFormationComponent } from './components/formation/CrudFormation/add-formateur/add-formation.component';

import { LoginComponent } from './components/Users/login/login.component';
import { RegisterComponent } from './components/Users/register/register.component';
import { HomeFormateurComponent } from './components/Formateur/home-formateur/home-formateur.component';
import { CalendarComponent } from './components/Formateur/calendar/calendar.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registre', component: RegisterComponent },

  // { path: '**', component: NotFoundComponentComponent },

  {
    path: 'homeFormateur', component: HomeFormateurComponent, children: [
      { path: 'calendar', component: CalendarComponent },
    ]
  },
  // Redirect to homeFormateur as the default route if none is provided
  { path: '', redirectTo: '/homeFormateur', pathMatch: 'full' },
];



  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

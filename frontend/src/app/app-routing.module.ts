import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/Users/login/login.component';
import { RegisterComponent } from './components/Users/register/register.component';
import { HomeFormateurComponent } from './components/Formateur/home-formateur/home-formateur.component';
import { CalendarComponent } from './components/Formateur/calendar/calendar.component';
import { HomeAdminComponent } from './components/Admin/home-admin/home-admin.component';
import { AuthGuard } from './service/AuthGuard';
import { ListFormateursComponent } from './components/Admin/list-formateurs/list-formateurs.component';
import { HomeManagerComponent } from './components/Manager/home-manager/home-manager.component';
import { CoursesComponent } from './components/Manager/courses/courses.component';
import { MultiStepWizardComponent } from './components/Manager/multi-step-wizard/multi-step-wizard.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registre', component: RegisterComponent },
  { path: 'homeAdmin', component: HomeAdminComponent, canActivate: [AuthGuard], data: { role: 'ROLE_ADMIN' }, children: [
      { path: 'listFormateur', component: ListFormateursComponent },
    ]
  },
  { path: 'homeFormateur', component: HomeFormateurComponent, canActivate: [AuthGuard], data: { role: 'ROLE_FORMATEUR' } },
  { path: 'homeManager', component: HomeManagerComponent, canActivate: [AuthGuard], data: { role: 'ROLE_MANAGER' },children:[
    { path: 'courses', component: CoursesComponent }, 
    { path: 'wizard', component: MultiStepWizardComponent }
  ]

},
 
 
  // { path: '**', component: NotFoundComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

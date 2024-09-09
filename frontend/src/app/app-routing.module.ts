import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormationComponent } from './formation/formation.component';
import { SujetComponent } from './sujet/sujet.component';

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
import { AdminNotificationsComponent } from './components/Admin/admin-notifications/admin-notifications.component';
import { AcceuilComponent } from './components/Admin/acceuil/acceuil.component';
import { ListDemandeFormationComponent } from './components/Manager/list-demande-formation/list-demande-formation.component';
import { TaskBoardComponent } from './components/Formateur/task/task-board/task-board.component';

const routes: Routes = [
 /* {path:'',component:SujetComponent ,},
  {path:'formation' , component:FormationComponent},*/
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registre', component: RegisterComponent },
  { path: 'homeAdmin', component: HomeAdminComponent, canActivate: [AuthGuard], data: { role: 'ROLE_ADMIN' }, children: [
      { path: 'listFormateur', component: ListFormateursComponent },
      {path:'notification' , component:AdminNotificationsComponent},
      { path: 'acceuil', component: AcceuilComponent }, // Add this route
      { path: '', redirectTo: 'acceuil', pathMatch: 'full' },

    ]
  },
  { path: 'homeFormateur', component: HomeFormateurComponent, canActivate: [AuthGuard], data: { role: 'ROLE_FORMATEUR' },children:[
    { path: 'task', component: TaskBoardComponent },
    { path: '', redirectTo: 'task', pathMatch: 'full' },
  ]},





  { path: 'homeManager', component: HomeManagerComponent, canActivate: [AuthGuard], data: { role: 'ROLE_MANAGER' },children:[
    { path: 'liste', component: ListDemandeFormationComponent },
    { path: 'courses', component: CoursesComponent }, 
    { path: 'wizard', component: MultiStepWizardComponent },
   
   
    {path:'sujet',component:SujetComponent ,},
    {path:'formation' , component:FormationComponent},
   

  ]

},
 
 
  // { path: '**', component: NotFoundComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

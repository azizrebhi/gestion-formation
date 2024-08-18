import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponentComponent } from './components/not-found-component/not-found-component.component';
//import { AddFormationComponent } from './components/formation/CrudFormation/add-formateur/add-formation.component';
import { UserComponent } from './components/Users/user/user.component';
import { LoginComponent } from './components/Users/login/login.component';
import { RegisterComponent } from './components/Users/register/register.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeFormateurComponent } from './components/Formateur/home-formateur/home-formateur.component';
import { HeadFormateurComponent } from './components/Formateur/head-formateur/head-formateur.component';
import { FooterFormateurComponent } from './components/Formateur/footer-formateur/footer-formateur.component';

import { CalendarComponent } from './components/Formateur/calendar/calendar.component';
import { AuthInterceptor } from './service/auth.interceptor';
import { HomeAdminComponent } from './components/Admin/home-admin/home-admin.component';
import { ListFormateursComponent } from './components/Admin/list-formateurs/list-formateurs.component';
import { NavComponent } from './components/Admin/nav/nav.component';
import { InvitationComponent } from './components/Admin/invitation/invitation.component';
import { ResponseComponent } from './components/Admin/response/response.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { AddFormateurComponent } from './components/Admin/add-formateur/add-formateur.component';
import { HomeManagerComponent } from './components/Manager/home-manager/home-manager.component';
import { CoursesComponent } from './components/Manager/courses/courses.component';
import { NavManagerComponent } from './components/Manager/nav-manager/nav-manager.component';
import { MultiStepWizardComponent } from './components/Manager/multi-step-wizard/multi-step-wizard.component';
import { DemandeFormationComponent } from './components/Manager/demande-formation/demande-formation.component';



/*FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);*/
@NgModule({
  declarations: [
    AppComponent,
   
    NotFoundComponentComponent,

   
    UserComponent,
    LoginComponent,
    RegisterComponent,
    HomeFormateurComponent,
    HeadFormateurComponent,
    FooterFormateurComponent,
   
    CalendarComponent,
      HomeAdminComponent,
      ListFormateursComponent,
      NavComponent,
      InvitationComponent,
      ResponseComponent,
      AddFormateurComponent,
      HomeManagerComponent,
      CoursesComponent,
      NavManagerComponent,
      MultiStepWizardComponent,
      DemandeFormationComponent,
      
    
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule, // Add MatIconModule here
    FormsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    BrowserAnimationsModule,
     MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
   
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

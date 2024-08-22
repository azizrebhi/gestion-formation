import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ToastrModule } from "ngx-toastr";
import { NotFoundComponentComponent } from "./components/not-found-component/not-found-component.component";
import { UserComponent } from "./components/Users/user/user.component";
import { LoginComponent } from "./components/Users/login/login.component";
import { RegisterComponent } from "./components/Users/register/register.component";
import { HomeFormateurComponent } from "./components/Formateur/home-formateur/home-formateur.component";
import { HeadFormateurComponent } from "./components/Formateur/head-formateur/head-formateur.component";
import { FooterFormateurComponent } from "./components/Formateur/footer-formateur/footer-formateur.component";
import { CalendarComponent } from "./components/Formateur/calendar/calendar.component";
import { HomeAdminComponent } from "./components/Admin/home-admin/home-admin.component";
import { ListFormateursComponent } from "./components/Admin/list-formateurs/list-formateurs.component";
import { NavComponent } from "./components/Admin/nav/nav.component";
import { InvitationComponent } from "./components/Admin/invitation/invitation.component";
import { ResponseComponent } from "./components/Admin/response/response.component";
import { FormationComponent } from "./formation/formation.component";
import { AddformComponent } from "./addform/addform.component";
import { AddFormateurComponent } from "./components/Admin/add-formateur/add-formateur.component";
import { HomeManagerComponent } from "./components/Manager/home-manager/home-manager.component";
import { CoursesComponent } from "./components/Manager/courses/courses.component";
import { NavManagerComponent } from "./components/Manager/nav-manager/nav-manager.component";
import { MultiStepWizardComponent } from "./components/Manager/multi-step-wizard/multi-step-wizard.component";
import { DemandeFormationComponent } from "./components/Manager/demande-formation/demande-formation.component";
import { SujetComponent } from "./sujet/sujet.component";
import {  MatDialogModule } from "@angular/material/dialog";
   import { MatSelectModule } from "@angular/material/select";

  import { MatDatepickerModule } from "@angular/material/datepicker";
  import { MatCardModule } from "@angular/material/card";
  import { MatInputModule } from "@angular/material/input";
  import { MatIconModule } from "@angular/material/icon";
  import { MatButtonModule } from "@angular/material/button";
  import { MatNativeDateModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { AuthInterceptor } from "./service/auth.interceptor";
import { AdminNotificationsComponent } from './components/Admin/admin-notifications/admin-notifications.component';


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
    SujetComponent,
    FormationComponent,
    AddformComponent,
    AdminNotificationsComponent
  ],
  imports: [
    
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule, // Add MatCardModule to the imports array
    MatDialogModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    MatDialogModule,
    MatIconModule, // Add MatIconModule here
    //BrowserAnimationsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [
    AppComponent,
  ]

})
export class AppModule { }

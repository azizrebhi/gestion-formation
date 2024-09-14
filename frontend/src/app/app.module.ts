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
import { AddFormateurComponent } from "./components/Admin/add-formateur/add-formateur.component";
import { HomeManagerComponent } from "./components/Manager/home-manager/home-manager.component";
import { CoursesComponent } from "./components/Manager/courses/courses.component";
import { NavManagerComponent } from "./components/Manager/nav-manager/nav-manager.component";
import { MultiStepWizardComponent } from "./components/Manager/multi-step-wizard/multi-step-wizard.component";
import { DemandeFormationComponent } from "./components/Manager/demande-formation/demande-formation.component";
import {  MatDialogModule } from "@angular/material/dialog";
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
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
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { AcceuilComponent } from './components/Admin/acceuil/acceuil.component';
import { EditFormateurComponent } from './components/Admin/edit-formateur/edit-formateur.component';
import { CommonModule } from "@angular/common";
import { ListDemandeFormationComponent } from './components/Manager/list-demande-formation/list-demande-formation.component';
import { EditDemandModalComponent } from './components/Manager/edit-demand-modal/edit-demand-modal.component';

import { TaskBoardComponent } from './components/Formateur/task/task-board/task-board.component';
import { AddTaskComponent } from './components/Formateur/task/add-task/add-task.component';
import { HistoricTaskComponent } from './components/Formateur/task/historic-task/historic-task.component';






import { PollService } from "src/Poll.service";
import { DisplayFormComponent } from './components/Manager/display-form/display-form.component';


import {AddPollComponent} from "./components/Manager/add-poll/add-poll.component";
import {CreateFormComponent} from "./components/Manager/create-form/create-form.component";
import {FormDetailsComponent} from "./components/Manager/form-details/form-details.component";
import {WelcomeComponent} from "./components/Manager/welcome/welcome.component";
import { NavbarComponent } from './components/Formateur/navbar/navbar.component';
import { NgApexchartsModule } from "ng-apexcharts";


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
    AdminNotificationsComponent,
    AcceuilComponent,
    EditFormateurComponent,
    ListDemandeFormationComponent,
    EditDemandModalComponent,
    WelcomeComponent,
    AddPollComponent,
    FormDetailsComponent,
    DisplayFormComponent,
    CreateFormComponent,
    NavbarComponent,
    TaskBoardComponent,
       AddTaskComponent,
       HistoricTaskComponent
  ],
  imports: [
    NgApexchartsModule,
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
    MatSnackBarModule,
    NgMultiSelectDropDownModule.forRoot(),
    CommonModule



  ],
  providers: [PollService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule {

}

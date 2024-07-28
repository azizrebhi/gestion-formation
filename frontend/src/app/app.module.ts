import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoursesComponent } from './components/courses/courses.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { ExpertsComponent } from './components/experts/experts.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { FormationComponent } from './components/formation/formation.component';
import { NotFoundComponentComponent } from './components/not-found-component/not-found-component.component';
//import { AddFormationComponent } from './components/formation/CrudFormation/add-formateur/add-formation.component';
import { DeleteFormationComponent } from './components/formation/CrudFormation/delete-formation/delete-formation.component';
import { UpdateFormationComponent } from './components/formation/CrudFormation/update-formation/update-formation.component';
import { ListFormationComponent } from './components/formation/CrudFormation/list-formation/list-formation.component';
import { DashboardFormationComponent } from './components/dashboard-formation/dashboard-formation.component';
import { UserComponent } from './components/Users/user/user.component';
import { LoginComponent } from './components/Users/login/login.component';
import { RegisterComponent } from './components/Users/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    CoursesComponent,
    SubjectsComponent,
    ExpertsComponent,
    IntroductionComponent,
    FormationComponent,
    NotFoundComponentComponent,

    DeleteFormationComponent,
    UpdateFormationComponent,
    ListFormationComponent,
    DashboardFormationComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

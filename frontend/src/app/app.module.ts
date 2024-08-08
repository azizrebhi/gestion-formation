import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import { FormateurComponent } from './components/formateur/formateur.component';
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import { FormationComponent } from './components/formation/formation.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarFormateurComponent } from './components/navbar-formateur/navbar-formateur.component';
import { AsideFormateurComponent } from './components/aside-formateur/aside-formateur.component';

import { FeedbackComponent } from './components/feedback/feedback.component';
import {NgApexchartsModule} from "ng-apexcharts";
import {FormCreateComponent} from "./components/create-form/create-form.component";
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {AddPollComponent} from "./components/add-poll/add-poll.component";
import {MyPollsComponent} from "./components/my-polls/my-polls.component";
import {PollSmallComponent} from "./components/poll-small/poll-small.component";
import {FlashMessagesModule} from "angular2-flash-messages";

@NgModule({
  declarations: [
    FeedbackComponent,
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    CoursesComponent,
    SubjectsComponent,
    ExpertsComponent,
    IntroductionComponent,
    FormateurComponent,
    FormationComponent,
    LoginComponent,
    NavbarFormateurComponent,
    AsideFormateurComponent,
    FormCreateComponent,
    WelcomeComponent,
    AddPollComponent,
    MyPollsComponent,
    PollSmallComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterModule.forRoot([]),
    HttpClientModule,
    NgApexchartsModule,
    FlashMessagesModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

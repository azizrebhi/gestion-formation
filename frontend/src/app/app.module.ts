import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponentComponent } from './components/not-found-component/not-found-component.component';
//import { AddFormationComponent } from './components/formation/CrudFormation/add-formateur/add-formation.component';
import { UserComponent } from './components/Users/user/user.component';
import { LoginComponent } from './components/Users/login/login.component';
import { RegisterComponent } from './components/Users/register/register.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeFormateurComponent } from './components/Formateur/home-formateur/home-formateur.component';
import { HeadFormateurComponent } from './components/Formateur/head-formateur/head-formateur.component';
import { FooterFormateurComponent } from './components/Formateur/footer-formateur/footer-formateur.component';
import { AsideFormateurComponent } from './components/Formateur/aside-formateur/aside-formateur.component';
import { NavbarFormateurComponent } from './components/Formateur/navbar-formateur/navbar-formateur.component';
import { CalendarComponent } from './components/Formateur/calendar/calendar.component';


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
    AsideFormateurComponent,
    NavbarFormateurComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

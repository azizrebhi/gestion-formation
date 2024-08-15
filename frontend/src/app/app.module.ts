import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card'; // Import MatCardModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SujetComponent} from './sujet/sujet.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormationComponent } from './formation/formation.component';

@NgModule({
  declarations: [
    AppComponent,
    SujetComponent,
    FormationComponent
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule, // Add MatCardModule to the imports array
    BrowserAnimationsModule,
    HttpClientModule,
    
    
    
  ],
  providers : [
    
  ],
  bootstrap :[
    AppComponent
  ]

})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card'; // Import MatCardModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SujetComponent} from './sujet/sujet.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormationComponent } from './formation/formation.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddformComponent } from './addform/addform.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    AppComponent,
    SujetComponent,
    FormationComponent,
    AddformComponent,
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule, // Add MatCardModule to the imports array
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    
    
    
  ],
  providers : [
    
  ],
  bootstrap :[
    AppComponent
  ]

})
export class AppModule { }

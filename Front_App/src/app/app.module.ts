import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from 'src/app/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import{BrowserAnimationsModule}from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { SurveillerUrlComponent } from './surveiller-url/surveiller-url.component';
import { DisplayDataComponent } from './display-table-data/display-table-data.component';
import { EnsembleUrlComponent } from './ensemble-url/ensemble-url.component';
import { AboutComponent } from './about/about.component'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    AcceuilComponent,
    SurveillerUrlComponent,
    DisplayDataComponent,
    EnsembleUrlComponent,
    AboutComponent,
  
    
    
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSnackBarModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent],
    schemas:[
      CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AppModule { }

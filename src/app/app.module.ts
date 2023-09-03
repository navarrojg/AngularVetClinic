import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientsComponent } from './patients/patients.component';
import { HeaderComponent } from './header/header.component';
import { ImportantNotesComponent } from './important-notes/important-notes.component';

@NgModule({
  declarations: [AppComponent, PatientsComponent, HeaderComponent, ImportantNotesComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

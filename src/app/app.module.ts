import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientsComponent } from './patients/patients.component';
import { HeaderComponent } from './header/header.component';
import { ImportantNotesComponent } from './important-notes/important-notes.component';
import { PatientDetailComponent } from './patients/patient-detail/patient-detail.component';
import { PatientEditComponent } from './patients/patient-edit/patient-edit.component';
import { PatientListComponent } from './patients/patient-list/patient-list.component';
import { PatientItemComponent } from './patients/patient-list/patient-item/patient-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    HeaderComponent,
    ImportantNotesComponent,
    PatientDetailComponent,
    PatientEditComponent,
    PatientListComponent,
    PatientItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

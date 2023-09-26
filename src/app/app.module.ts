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
import { MedicineNeedsListComponent } from './medicine-needs-list/medicine-needs-list.component';
import { MedicineNeedsListEditComponent } from './medicine-needs-list/medicine-needs-list-edit/medicine-needs-list-edit.component';
import { AuthComponent } from './auth/auth.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { PatientStartComponent } from './patients/patient-start/patient-start.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ArchiveComponent } from './archive/archive.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';

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
    MedicineNeedsListComponent,
    MedicineNeedsListEditComponent,
    AuthComponent,
    DropdownDirective,
    PatientStartComponent,
    ArchiveComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

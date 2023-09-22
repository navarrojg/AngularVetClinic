import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsComponent } from './patients/patients.component';
import { ImportantNotesComponent } from './important-notes/important-notes.component';
import { MedicineNeedsListComponent } from './medicine-needs-list/medicine-needs-list.component';
import { AuthComponent } from './auth/auth.component';
import { PatientStartComponent } from './patients/patient-start/patient-start.component';
import { PatientDetailComponent } from './patients/patient-detail/patient-detail.component';
import { PatientEditComponent } from './patients/patient-edit/patient-edit.component';
import { PatientResolverService } from './patients/patient-resolver.service';

const routes: Routes = [
  { path: '', redirectTo: '/patients', pathMatch: 'full' },
  {
    path: 'patients',
    component: PatientsComponent,
    children: [
      { path: '', component: PatientStartComponent },
      { path: 'new', component: PatientEditComponent },
      {
        path: ':id',
        component: PatientDetailComponent,
        resolve: [PatientResolverService],
      },
      {
        path: ':id/edit',
        component: PatientEditComponent,
        resolve: [PatientResolverService],
      },
    ],
  },
  { path: 'important-notes', component: ImportantNotesComponent },
  { path: 'medicine-needs-list', component: MedicineNeedsListComponent },
  { path: 'auth', component: AuthComponent },
  { path: '**', redirectTo: '/patients', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

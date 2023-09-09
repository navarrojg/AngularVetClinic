import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsComponent } from './patients/patients.component';
import { ImportantNotesComponent } from './important-notes/important-notes.component';
import { MedicineNeedsListComponent } from './medicine-needs-list/medicine-needs-list.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: '', redirectTo: '/patients', pathMatch: 'full' },
  { path: 'patients', component: PatientsComponent },
  { path: 'important-notes', component: ImportantNotesComponent },
  { path: 'medicine-needs-list', component: MedicineNeedsListComponent },
  { path: 'auth', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

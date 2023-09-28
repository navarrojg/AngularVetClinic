import { Injectable } from '@angular/core';
import { Patient } from '../patients/patient.model';

@Injectable({ providedIn: 'root' })
export class ArchiveService {
  archivedPatients: Patient[] = [];
}

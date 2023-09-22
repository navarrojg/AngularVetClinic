import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Patient } from './patient.model';
import { DataStorageService } from '../shared/data-storage.service';
import { Observable } from 'rxjs';
import { PatientsService } from './patients.service';

@Injectable({ providedIn: 'root' })
export class PatientResolverService implements Resolve<Patient[]> {
  constructor(
    private dsService: DataStorageService,
    private patientService: PatientsService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Patient[] | Observable<Patient[]> | Promise<Patient[]> {
    const patients = this.patientService.getPatients();

    if (patients.length === 0) {
      return this.dsService.fetchPatients();
    } else {
      return patients;
    }
  }
}

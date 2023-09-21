import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PatientsService } from '../patients/patients.service';
import { map } from 'rxjs/operators';
import { Patient } from '../patients/patient.model';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private patientService: PatientsService
  ) {}

  fetchPatients() {
    this.http
      .get<Patient[]>(
        'https://vetclinic-b2f5e-default-rtdb.firebaseio.com/patients.json'
      )
      .subscribe((patients) => {
        this.patientService.setPatients(patients);
      });
  }

  storePatients() {
    const patientsList: Patient[] = this.patientService.getPatients();
    this.http
      .put(
        'https://vetclinic-b2f5e-default-rtdb.firebaseio.com/patients.json',
        patientsList
      )
      .subscribe((response) => {
        console.log(response);
      });
  }
}

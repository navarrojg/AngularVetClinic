import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PatientsService } from '../patients/patients.service';
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { Patient } from '../patients/patient.model';
import { Subject } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  isFetched = new Subject<boolean>();

  constructor(
    private http: HttpClient,
    private patientService: PatientsService,
    private authSerive: AuthService
  ) {}

  fetchPatients() {
    return this.http
      .get<Patient[]>(
        'https://vetclinic-b2f5e-default-rtdb.firebaseio.com/patients.json'
      )
      .pipe(
        map((patients) => {
          return patients.map((patient) => {
            return {
              ...patient,
              medicine: patient.medicine ? patient.medicine : [],
            };
          });
        }),
        tap((patients) => {
          this.patientService.setPatients(patients);
          this.isFetched.next(true);
        })
      );
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

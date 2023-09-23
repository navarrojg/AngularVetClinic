import { Component, OnDestroy, OnInit } from '@angular/core';
import { PatientsService } from '../patients.service';
import { Subscription } from 'rxjs';
import { Patient } from '../patient.model';

@Component({
  selector: 'app-patient-start',
  templateUrl: './patient-start.component.html',
  styleUrls: ['./patient-start.component.css'],
})
export class PatientStartComponent implements OnInit, OnDestroy {
  arePatients = false;
  patients: Patient[];
  subscription: Subscription;

  constructor(private patientService: PatientsService) {}
  ngOnInit() {
    // this.subscription = this.patientService.patientsChanged.subscribe(
    //   (patients: Patient[]) => {
    //     if (patients.length > 0) {
    //       this.arePatients = true;
    //       console.log(patients + ' patList');
    //       console.log('patients length: ' + patients.length);
    //     }
    //   }
    // );
    // console.log(this.arePatients + ' arePatients');
    this.arePatients = false;
    this.subscription = this.patientService.patientsChanged.subscribe(
      (patients: Patient[]) => {
        this.patients = patients;
        if (this.patients.length > 0) {
          this.arePatients = true;
        } else {
          this.arePatients = false;
        }
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

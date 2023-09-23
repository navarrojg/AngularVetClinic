import { Component, OnDestroy, OnInit } from '@angular/core';
import { PatientsService } from '../patients.service';
import { Subscription } from 'rxjs';
import { Patient } from '../patient.model';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-patient-start',
  templateUrl: './patient-start.component.html',
  styleUrls: ['./patient-start.component.css'],
})
export class PatientStartComponent implements OnInit, OnDestroy {
  arePatients = false;
  patients: Patient[];
  subscription: Subscription;

  constructor(
    private patientService: PatientsService,
    private ds: DataStorageService
  ) {}
  ngOnInit() {
    let patients = this.patientService.getPatients();
    if (patients.length > 0) {
      this.arePatients = true;
    } else {
      this.arePatients = false;
    }
    this.subscription = this.ds.isFetched.subscribe((isFetched: boolean) => {
      this.arePatients = isFetched;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

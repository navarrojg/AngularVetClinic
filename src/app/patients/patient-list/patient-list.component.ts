import { Component, OnInit, OnDestroy } from '@angular/core';
import { Patient } from '../patient.model';
import { Medicine } from 'src/app/shared/medicine.model';
import { Subscription } from 'rxjs';
import { PatientsService } from '../patients.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css'],
})
export class PatientListComponent implements OnInit, OnDestroy {
  patients: Patient[];
  subscription: Subscription;
  isFetching = false;

  constructor(
    private patientService: PatientsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.isFetching = true;
    this.subscription = this.patientService.patientsChanged.subscribe(
      (patients: Patient[]) => {
        this.patients = patients;
      }
    );
    this.patients = this.patientService.getPatients();
    this.isFetching = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onNewPatient() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}

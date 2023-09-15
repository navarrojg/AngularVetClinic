import { Component, OnInit, OnDestroy } from '@angular/core';
import { Patient } from '../patient.model';
import { PatientsService } from '../patients.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css'],
})
export class PatientDetailComponent implements OnInit, OnDestroy {
  patient: Patient;
  id: number;
  subscription: Subscription;

  constructor(
    private patientService: PatientsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.patientService.patientSelected.subscribe((patient: Patient) => {
    //   this.patient = patient;
    // });

    this.subscription = this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.patient = this.patientService.getPatient(this.id);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onAddNewMedicine() {
    this.patientService.addMedsToList(this.patient.medicine);
  }
}

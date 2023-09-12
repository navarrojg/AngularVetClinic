import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient.model';
import { PatientsService } from '../patients.service';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css'],
})
export class PatientDetailComponent implements OnInit {
  patient: Patient;
  id: number;

  constructor(private patientService: PatientsService) {}

  ngOnInit() {
    this.patientService.patientSelected.subscribe((patient: Patient) => {
      this.patient = patient;
    });
  }
}

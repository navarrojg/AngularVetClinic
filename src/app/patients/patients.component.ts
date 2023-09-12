import { Component, OnInit } from '@angular/core';
import { PatientsService } from './patients.service';
import { Patient } from './patient.model';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],
})
export class PatientsComponent implements OnInit {
  selectedPatient;

  constructor(private patientService: PatientsService) {}

  ngOnInit() {
    this.patientService.patientSelected.subscribe((patient: Patient) => {
      this.selectedPatient = patient;
    });
  }
}

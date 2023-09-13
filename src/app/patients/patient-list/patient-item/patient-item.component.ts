import { Component, Input, OnInit } from '@angular/core';
import { Patient } from '../../patient.model';
import { PatientsService } from '../../patients.service';

@Component({
  selector: 'app-patient-item',
  templateUrl: './patient-item.component.html',
  styleUrls: ['./patient-item.component.css'],
})
export class PatientItemComponent implements OnInit {
  @Input() patient: Patient;
  @Input() index: number;

  constructor(private patientService: PatientsService) {}

  ngOnInit() {}

  onSeleceted() {
    this.patientService.patientSelected.next(this.patient);
  }
}

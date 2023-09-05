import { Component } from '@angular/core';
import { Patient } from '../patient.model';
import { Medicine } from 'src/app/shared/medicine.model';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css'],
})
export class PatientListComponent {
  patients: Patient[] = [
    new Patient(
      'Bojack',
      6,
      'broken left back leg',
      'https://horseyhooves.com/wp-content/uploads/2022/08/Beautiful-horse-running-in-a-grassy-field.jpg',
      'A+',
      [new Medicine('Apap', 2, 'daily')]
    ),
  ];

  onNewRecipe() {}
}

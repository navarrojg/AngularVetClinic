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
    new Patient(
      'CrackerJack',
      4,
      'hips problem',
      'https://www.zooplus.pl/magazyn/wp-content/uploads/2022/05/kon-oldenburski-sylwetka-1024x683.jpeg',
      'A-',
      [new Medicine('Vicodin', 1, 'two times per day')]
    ),
    new Patient(
      'Hope',
      9,
      'bitten by snake',
      'https://www.fizjoterapiakoni.com.pl/wp-content/uploads/2019/01/Czy-Tw%C3%B3j-ko%C5%84-potrzebuje-fizjo.jpg',
      'A-',
      [
        new Medicine('Akatar', 0.5, 'in the evening'),
        new Medicine('Colaflex', 2, 'two times per day'),
      ]
    ),
  ];

  onNewRecipe() {}
}

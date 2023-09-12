import { Injectable } from '@angular/core';
import { Patient } from './patient.model';
import { Medicine } from '../shared/medicine.model';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PatientsService {
  patientsChanged = new Subject<Patient[]>();
  patientSelected = new Subject<Patient>();

  private patients: Patient[] = [
    new Patient(
      'Bojack',
      6,
      'M',
      'broken left back leg',
      'https://horseyhooves.com/wp-content/uploads/2022/08/Beautiful-horse-running-in-a-grassy-field.jpg',
      'A+',
      [new Medicine('Apap', 2, 'daily')]
    ),
    new Patient(
      'CrackerJack',
      4,
      'M',
      'hips problem',
      'https://www.zooplus.pl/magazyn/wp-content/uploads/2022/05/kon-oldenburski-sylwetka-1024x683.jpeg',
      'A-',
      [new Medicine('Vicodin', 1, 'two times per day')]
    ),
    new Patient(
      'Hope',
      9,
      'F',
      'bitten by snake',
      'https://www.fizjoterapiakoni.com.pl/wp-content/uploads/2019/01/Czy-Tw%C3%B3j-ko%C5%84-potrzebuje-fizjo.jpg',
      'A-',
      [
        new Medicine('Akatar', 0.5, 'in the evening'),
        new Medicine('Colaflex', 2, 'two times per day'),
      ]
    ),
  ];

  getPatients() {
    return this.patients.slice();
  }

  getPatient(index: number) {
    return this.patients[index];
  }
}

import { Injectable } from '@angular/core';
import { Patient } from './patient.model';
import { Medicine } from '../shared/medicine.model';
import { Subject } from 'rxjs';
import { MedicineNeedsListService } from '../medicine-needs-list/medicine-needs-list.service';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class PatientsService {
  patientsChanged = new Subject<Patient[]>();

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

  constructor(
    private medListService: MedicineNeedsListService,
    private router: Router
  ) {}

  getPatients() {
    return this.patients.slice();
  }

  getPatient(index: number) {
    return this.patients[index];
  }

  addMedsToList(meds: Medicine[]) {
    this.medListService.addMedications(meds);
  }

  removePatient(index: number) {
    this.patients.splice(index, 1);
    this.patientsChanged.next(this.patients.slice());
    this.router.navigate(['../']);
  }

  updatePatient(index: number, newPatient: Patient) {
    this.patients[index] = newPatient;
    this.patientsChanged.next(this.patients.slice());
  }

  addPatient(newPatient: Patient) {
    this.patients.push(newPatient);
    this.patientsChanged.next(this.patients.slice());
  }
}

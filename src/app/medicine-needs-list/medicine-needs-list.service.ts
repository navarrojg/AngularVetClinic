import { Medicine } from '../shared/medicine.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MedicineNeedsListService {
  medecineChanged = new Subject<Medicine[]>();
  startedEditing = new Subject<number>();

  private medications = [
    new Medicine('Vicodin', 2, 'two times per day'),
    new Medicine('XBD shot', 1, 'in the morning'),
    new Medicine('B2 vitamin shot', 2, 'in the morning and in the evening'),
  ];

  getMedicineList() {
    return this.medications.slice();
  }

  addNewMedicine(medicine: Medicine) {
    this.medications.push(medicine);
    this.medecineChanged.next(this.medications.slice());
  }

  getMedicine(index: number) {
    return this.medications[index];
  }

  updateMedicine(index: number, newMedicine: Medicine) {
    this.medications[index] = newMedicine;
    this.medecineChanged.next(this.medications.slice());
  }

  addMedications(meds: Medicine[]) {
    this.medications.push(...meds);
    this.medecineChanged.next(this.medications.slice());
  }

  removeMedicine(index: number) {
    this.medications.splice(index, 1);
    this.medecineChanged.next(this.medications.slice());
  }
}

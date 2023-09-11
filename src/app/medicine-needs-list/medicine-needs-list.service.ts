import { Medicine } from '../shared/medicine.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MedicineNeedsListService {
  medecineChanged = new Subject<Medicine[]>();

  private medications = [
    new Medicine('Vicodin', 2, 'two times per day'),
    new Medicine('XBD shot', 1, 'in the morning'),
  ];

  getMedicineList() {
    return this.medications.slice();
  }
}

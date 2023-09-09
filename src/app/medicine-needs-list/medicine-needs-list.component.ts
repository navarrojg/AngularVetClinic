import { Component } from '@angular/core';
import { Medicine } from '../shared/medicine.model';

@Component({
  selector: 'app-medicine-needs-list',
  templateUrl: './medicine-needs-list.component.html',
  styleUrls: ['./medicine-needs-list.component.css'],
})
export class MedicineNeedsListComponent {
  medications = [
    new Medicine('Vicodin', 2, 'two times per day'),
    new Medicine('XBD shot', 1, 'in the morning'),
  ];
}

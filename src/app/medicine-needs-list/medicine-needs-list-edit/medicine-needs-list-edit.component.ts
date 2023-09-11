import { Component, ElementRef, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { Medicine } from 'src/app/shared/medicine.model';
import { MedicineNeedsListService } from '../medicine-needs-list.service';

@Component({
  selector: 'app-medicine-needs-list-edit',
  templateUrl: './medicine-needs-list-edit.component.html',
  styleUrls: ['./medicine-needs-list-edit.component.css'],
})
export class MedicineNeedsListEditComponent {
  @ViewChild('nameInput', { static: false }) nameInput: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInput: ElementRef;
  @ViewChild('freqInput', { static: false }) freqInput: ElementRef;
  medicineAdded = new Subject<Medicine>();

  constructor(private medicineService: MedicineNeedsListService) {}

  onAddMed() {
    const medName = this.nameInput.nativeElement.value;
    const medAmount = this.amountInput.nativeElement.value;
    const medFreq = this.freqInput.nativeElement.value;
    const newMed = new Medicine(medName, medAmount, medFreq);
    this.medicineService.addNewMedicine(newMed);
  }

  onEditMed() {}

  onClear() {}
}

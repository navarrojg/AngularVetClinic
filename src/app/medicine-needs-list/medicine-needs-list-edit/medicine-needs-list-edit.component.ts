import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-medicine-needs-list-edit',
  templateUrl: './medicine-needs-list-edit.component.html',
  styleUrls: ['./medicine-needs-list-edit.component.css'],
})
export class MedicineNeedsListEditComponent {
  @ViewChild('nameInput', { static: false }) nameInput: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInput: ElementRef;
  @ViewChild('freqInput', { static: false }) freqInput: ElementRef;

  onAddMed() {}

  onEditMed() {}

  onClear() {}
}

import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Medicine } from 'src/app/shared/medicine.model';
import { MedicineNeedsListService } from '../medicine-needs-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-medicine-needs-list-edit',
  templateUrl: './medicine-needs-list-edit.component.html',
  styleUrls: ['./medicine-needs-list-edit.component.css'],
})
export class MedicineNeedsListEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) mlForm: NgForm;
  editMode = false;
  editedItemIndex: number;
  editedItem: Medicine;
  subscription: Subscription;

  constructor(private medicineService: MedicineNeedsListService) {}

  ngOnInit() {
    this.subscription = this.medicineService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.medicineService.getMedicine(index);
        this.mlForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
          frequency: this.editedItem.frequency,
        });
      }
    );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newMedicine = new Medicine(value.name, value.amount, value.frequency);
    if (this.editMode) {
      this.medicineService.updateMedicine(this.editedItemIndex, newMedicine);
    } else {
      this.medicineService.addNewMedicine(newMedicine);
    }
    this.editMode = false;
    form.reset();
  }

  onDelete() {
    this.medicineService.removeMedicine(this.editedItemIndex);
    this.onClear();
  }

  onClear() {
    this.mlForm.reset();
    this.editMode = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

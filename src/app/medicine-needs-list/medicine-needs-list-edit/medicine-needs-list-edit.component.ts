import { Component, ElementRef, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { Medicine } from 'src/app/shared/medicine.model';
import { MedicineNeedsListService } from '../medicine-needs-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-medicine-needs-list-edit',
  templateUrl: './medicine-needs-list-edit.component.html',
  styleUrls: ['./medicine-needs-list-edit.component.css'],
})
export class MedicineNeedsListEditComponent {
  @ViewChild('f', { static: false }) slForm: NgForm;
  medicineAdded = new Subject<Medicine>();

  constructor(private medicineService: MedicineNeedsListService) {}

  onAddMed() {}

  onEditMed() {}

  onClear() {}

  onSubmit(form: NgForm) {}
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Medicine } from '../shared/medicine.model';
import { Subscription } from 'rxjs';
import { MedicineNeedsListService } from './medicine-needs-list.service';

@Component({
  selector: 'app-medicine-needs-list',
  templateUrl: './medicine-needs-list.component.html',
  styleUrls: ['./medicine-needs-list.component.css'],
})
export class MedicineNeedsListComponent implements OnInit, OnDestroy {
  medicineList: Medicine[];
  private subscription: Subscription;

  constructor(private medicineService: MedicineNeedsListService) {}

  ngOnInit() {
    this.medicineList = this.medicineService.getMedicineList();
    this.subscription = this.medicineService.medecineChanged.subscribe(
      (medicineList: Medicine[]) => {
        this.medicineList = medicineList;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

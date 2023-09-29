import { Component, OnDestroy, OnInit } from '@angular/core';
import { Patient } from '../patients/patient.model';
import { PatientsService } from '../patients/patients.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css'],
})
export class ArchiveComponent implements OnInit, OnDestroy {
  archivedPatients: Patient[] = [];
  subscription: Subscription;

  constructor(private patientService: PatientsService) {}

  ngOnInit() {
    this.subscription = this.patientService.archivedPatientsChanged.subscribe(
      (archivedPatiens: Patient[]) => {
        this.archivedPatients = archivedPatiens;
      }
    );
    this.archivedPatients = this.patientService.getArchivePatinets();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

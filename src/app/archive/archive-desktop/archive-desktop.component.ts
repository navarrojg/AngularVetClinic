import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Patient } from 'src/app/patients/patient.model';
import { PatientsService } from 'src/app/patients/patients.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-archive-desktop',
  templateUrl: './archive-desktop.component.html',
  styleUrls: ['./archive-desktop.component.css'],
})
export class ArchiveDesktopComponent {
  archivedPatients: Patient[] = [];
  subscription: Subscription;

  constructor(private patientService: PatientsService, private dsService:DataStorageService) {}

  ngOnInit() {
    this.subscription = this.patientService.archivedPatientsChanged.subscribe(
      (archivedPatiens: Patient[]) => {
        this.archivedPatients = archivedPatiens;
      }
    );
    this.archivedPatients = this.patientService.getArchivePatinets();
  }

  onSendData() {
    this.dsService.storeArchivedPatients()
  }

  onFetchData() {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

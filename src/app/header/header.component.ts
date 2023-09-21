import { Component } from '@angular/core';
import { Patient } from '../patients/patient.model';
import { HttpClient } from '@angular/common/http';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private dsService: DataStorageService) {}

  onSaveData() {
    this.dsService.storePatients();
  }

  onFetchData() {
    this.dsService.fetchPatients();
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Patient } from '../patients/patient.model';
import { PatientsService } from '../patients/patients.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css'],
})
export class ArchiveComponent {}

import { Component, Input } from '@angular/core';
import { Patient } from 'src/app/patients/patient.model';

@Component({
  selector: 'app-archive-item',
  templateUrl: './archive-item.component.html',
  styleUrls: ['./archive-item.component.css'],
})
export class ArchiveItemComponent {
  @Input() archivedPatient: Patient;
  @Input() id: number;
}

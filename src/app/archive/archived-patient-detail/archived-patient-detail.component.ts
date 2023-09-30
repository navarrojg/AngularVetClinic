import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Patient } from 'src/app/patients/patient.model';
import { PatientsService } from 'src/app/patients/patients.service';

@Component({
  selector: 'app-archived-patient-detail',
  templateUrl: './archived-patient-detail.component.html',
  styleUrls: ['./archived-patient-detail.component.css'],
})
export class ArchivedPatientDetailComponent implements OnInit {
  patient: Patient;
  id: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private patientService: PatientsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.patient = this.patientService.getArchivedPatient(this.id);
      console.log(this.id);
    });
  }

  onGoBack() {
    this.router.navigate(['../', { relativeTo: this.route }]);
  }

  onMovingBacktoPL() {
    this.patientService.moveBackPatientToPLfromArchive(this.id, this.patient);
    this.onGoBack();
  }
}

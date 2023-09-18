import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Patient } from '../patient.model';
import { PatientsService } from '../patients.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.css'],
})
export class PatientEditComponent implements OnInit, OnDestroy {
  editmode = false;
  id: number;
  @ViewChild('f', { static: false }) pForm: NgForm;
  editPatient: Patient;
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private patientService: PatientsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editmode = params['id'] != null;
      if (this.editmode) {
        this.editPatient = this.patientService.getPatient(this.id);
        console.log(this.editPatient);
        console.log(this.editmode);
        console.log(this.id);
        this.pForm.setValue({
          name: this.editPatient.name,
          age: this.editPatient.age,
          sex: this.editPatient.sex,
          desc: this.editPatient.description,
          imagePath: this.editPatient.imagePath,
          bloodType: this.editPatient.bloodType,
          // medicine: this.editPatient.medicine,
        });
      }
    });
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newPatient = new Patient(
      value.name,
      value.age,
      value.sex,
      value.desc,
      value.imagePath,
      value.bloodType,
      value.medicine
    );
    if (this.editmode) {
      this.patientService.updatePatient(this.id, newPatient);
    } else {
      this.patientService.addPatient(newPatient);
    }
    this.editmode = false;
    form.reset();
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

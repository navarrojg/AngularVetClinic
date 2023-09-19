import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
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
export class PatientEditComponent implements OnInit, OnDestroy, AfterViewInit {
  editmode = false;
  id: number;
  editPatient: Patient;
  subscription: Subscription;
  @ViewChild('patientForm', { static: false }) pForm: NgForm;

  constructor(
    private route: ActivatedRoute,
    private patientService: PatientsService,
    private router: Router
  ) {}

  ngOnInit() {
    console.log(this.pForm);
    this.subscription = this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editmode = params['id'] != null;
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.editPatient = this.patientService.getPatient(this.id);
      console.log(this.editPatient.medicine);
      if (this.editmode) {
        this.pForm.setValue({
          name: this.editPatient.name,
          age: this.editPatient.age,
          sex: this.editPatient.sex,
          desc: this.editPatient.description,
          imagePath: this.editPatient.imagePath,
          bloodType: this.editPatient.bloodType,
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

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}

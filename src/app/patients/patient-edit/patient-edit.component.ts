import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  patientForm: FormGroup;
  subscription: Subscription;

  get medsControls() {
    return (<FormArray>this.patientForm.get('medicine')).controls;
  }

  constructor(
    private route: ActivatedRoute,
    private patientService: PatientsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editmode = params['id'] != null;
      this.initForm();
    });
  }

  private initForm() {
    let patientName = '';
    let patientAge;
    let patientSex = '';
    let patientDesc = '';
    let patientImagePath = '';
    let patientBloodType = '';
    let patientMeds = new FormArray([]);

    if (this.editmode) {
      const patient = this.patientService.getPatient(this.id);
      patientName = patient.name;
      patientAge = patient.age;
      patientSex = patient.sex;
      patientDesc = patient.description;
      patientImagePath = patient.imagePath;
      patientBloodType = patient.bloodType;
      if (patient['medicine']) {
        for (let med of patient.medicine) {
          patientMeds.push(
            new FormGroup({
              name: new FormControl(med.name),
              amount: new FormControl(med.amount),
              frequency: new FormControl(med.frequency),
            })
          );
        }
      }
    }
    this.patientForm = new FormGroup({
      name: new FormControl(patientName),
      age: new FormControl(patientAge),
      sex: new FormControl(patientSex),
      description: new FormControl(patientDesc),
      imagePath: new FormControl(patientImagePath),
      bloodType: new FormControl(patientBloodType),
      medicine: patientMeds,
    });
  }

  onSubmit() {
    if (this.editmode) {
      this.patientService.updatePatient(this.id, this.patientForm.value);
    } else {
      this.patientService.addPatient(this.patientForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onAddNewMed() {
    (<FormArray>this.patientForm.get('medicine')).push(
      new FormGroup({
        name: new FormControl(null),
        amount: new FormControl(null),
        frequency: new FormControl(null),
      })
    );
  }

  onDeleteMed(index: number) {
    (<FormArray>this.patientForm.get('medicine')).removeAt(index);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

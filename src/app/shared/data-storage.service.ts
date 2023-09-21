import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PatientsService } from '../patients/patients.service';
import { map } from 'rxjs/operators';
import { Patient } from '../patients/patient.model';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private patientService: PatientsService
  ) {}

  private fetchPosts() {
    this.http
      .get('https://vetclinic-b2f5e-default-rtdb.firebaseio.com/posts.json')
      .pipe(
        map((responseData) => {
          const postsArray = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
        })
      )
      .subscribe((posts) => {
        console.log(posts);
      });
  }

  storePatients() {
    const patientsList: Patient[] = this.patientService.getPatients();
    this.http
      .put(
        'https://vetclinic-b2f5e-default-rtdb.firebaseio.com/patients.json',
        patientsList
      )
      .subscribe((response) => {
        console.log(response);
      });
  }
}

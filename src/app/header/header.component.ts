import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Patient } from '../patients/patient.model';
import { PatientsService } from '../patients/patients.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(
    private http: HttpClient,
    private patientService: PatientsService
  ) {}

  patientList: Patient[] = this.patientService.getPatients();

  onSaveData(patientList: Patient[]) {
    this.http
      .post(
        'https://vetclinic-b2f5e-default-rtdb.firebaseio.com/posts.json',
        patientList
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  onFetchData() {
    this.fetchPosts();
  }

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
}

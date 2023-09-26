import { Component, OnDestroy, OnInit } from '@angular/core';
import { Patient } from '../patients/patient.model';
import { HttpClient } from '@angular/common/http';
import { DataStorageService } from '../shared/data-storage.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(
    private dsService: DataStorageService,
    private authService: AuthService,
    private router: Router
  ) {}

  isAuthenticated = false;
  private subscription: Subscription;

  ngOnInit() {
    this.subscription = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
    });
  }
  onSaveData() {
    this.dsService.storePatients();
  }

  onFetchData() {
    this.dsService.fetchPatients().subscribe();
  }

  onlogout() {
    this.authService.logout();
    this.router.navigate(['/auth']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

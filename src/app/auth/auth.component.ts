import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  isloginMode = true;

  onSwitchMode() {
    this.isloginMode = !this.isloginMode;
  }
}

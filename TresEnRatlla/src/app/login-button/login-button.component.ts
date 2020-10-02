import { Component, OnInit } from '@angular/core';
import { FireServiceService } from '../fire-service.service';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent {

  constructor(public fireService: FireServiceService) { }

  login() {
    this.fireService.loginWithGoogle();
  }
}

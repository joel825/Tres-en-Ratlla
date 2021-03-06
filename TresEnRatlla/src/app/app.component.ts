import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FireServiceService } from './fire-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  taulell: boolean = false;

  constructor(public fireService: FireServiceService){
    this.fireService.afAuth.authState.subscribe(
      (auth) => {
        if (auth == null) {
          console.log('Not Logged in.');
        }
        else{
          console.log('Successfully Logged in.');
          this.taulell = true;
        }
      }
    )
  }
  
  doLogout() {
    console.log('Logout');
    this.taulell = false;
    this.fireService.logout();
  }
}


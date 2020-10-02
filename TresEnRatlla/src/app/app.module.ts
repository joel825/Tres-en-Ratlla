import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaulellComponent } from './taulell/taulell.component';
import { RankingComponent } from './ranking/ranking.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { LoginButtonComponent } from './login-button/login-button.component';
import { FireServiceService } from './fire-service.service';
import { AngularFireAuth } from '@angular/fire/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyCFObZGDvyr5U5GWmDOTcpqQZndwH77o00",
  authDomain: "tresenratlla-1e4b3.firebaseapp.com",
  databaseURL: "https://tresenratlla-1e4b3.firebaseio.com",
  projectId: "tresenratlla-1e4b3",
  storageBucket: "tresenratlla-1e4b3.appspot.com",
  messagingSenderId: "900490064989",
  appId: "1:900490064989:web:e402edfa5df8a30202c9b4",
  measurementId: "G-HPYW4ELR1T"
};

@NgModule({
  declarations: [
    AppComponent,
    TaulellComponent,
    RankingComponent,
    LoginButtonComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig), // Import firebase
    AngularFirestoreModule,
  
  ],
  providers: [FireServiceService,AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class FireServiceService {
  nom: String;

  constructor(public afAuth: AngularFireAuth) { 
    
  }

  loginWithGoogle() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  AuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
    .then((result) => {
        console.log('You have been successfully logged in!')
        

    }).catch((error) => {
        console.log(error)
    })
  }

  logout() {
    return this.afAuth.signOut();
  }
}

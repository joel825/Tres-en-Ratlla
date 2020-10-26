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

  actualitzarPunts(){
    var ref = firebase.database();
      this.afAuth.user.subscribe((auth) =>{
        ref.ref("/Jugadors/" + auth.uid).once('value',function(e){
          if (e.exists()) {
            //Augmentar
            let puntsActualitzats = e.val().punts + 1;
            ref.ref("/Jugadors/" + auth.uid).update({punts: puntsActualitzats});
            console.log(e.val());

          } else {
            let email = auth.email;
            let name = auth.displayName;
            ref.ref("/Jugadors/" + auth.uid).set({email: email,
                                                  name: name,
                                                  punts: 1});
          }
          console.log(e.exists());
        })
      })
  }
}

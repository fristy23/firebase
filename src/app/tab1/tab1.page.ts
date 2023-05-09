import { Component } from '@angular/core';
import { getAuth,signInWithPopup, createUserWithEmailAndPassword, signOut,GoogleAuthProvider } from "firebase/auth";
import { FirebaseService } from 'src/app/auth/firebase.service';
import { AppComponent } from 'src/app/app.component';

const provider = new GoogleAuthProvider();
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  user = " "
  password = " "

  constructor() { }
  login() {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.user, this.password)
      .then((userCredential) => {

        const user = userCredential.user;
        // console.log(this.user);
        // console.log(this.password);
        alert("Succesful login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

      });
  }
  signup() {
    const auth = getAuth();
    signOut(auth).then(() => {
      alert("succesful Signout");
    }).catch((error) => {
      const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error");
    });
  }
  google(){
    const auth = getAuth();
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
     // const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  
  
  }
 
}
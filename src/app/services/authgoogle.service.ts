import { Injectable } from '@angular/core';
import { getAuth,signInWithPopup, createUserWithEmailAndPassword, signOut,GoogleAuthProvider } from "firebase/auth";
import { FirebaseService } from 'src/app/services/firebase.service';




@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() {
    
  
    }
    

    signUpgoogle()
    {
      const provider = new GoogleAuthProvider();
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

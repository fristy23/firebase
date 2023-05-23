import { Component } from '@angular/core';
import { getAuth,signInWithPopup, createUserWithEmailAndPassword, signOut,GoogleAuthProvider } from "firebase/auth";

import {EmailService} from 'src/app/services/authgoogle.service';
import { Router } from '@angular/router';
import {FirebaseService} from 'src/app/services/firebase.service';
import {User} from 'src/app/services/user'

// const provider = new GoogleAuthProvider();
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  user=""
  email = ""
  password = ""
  data=false
  
    
  
  constructor(public google:EmailService, public manual:FirebaseService) 
  {  google.signUpgoogle();
     if (this.data==true)
     {
    manual.createaccount(this.user, this.email,this.password);
    
     }
  }

  
  // google(){
  //   const auth = getAuth();
  //   signInWithPopup(auth, provider)
  //   .then((result) => {
  //     // This gives you a Google Access Token. You can use it to access the Google API.
  //     const credential = GoogleAuthProvider.credentialFromResult(result);
  //    // const token = credential.accessToken;
  //     // The signed-in user info.
  //     const user = result.user;
  //     // IdP data available using getAdditionalUserInfo(result)
  //     // ...
  //   }).catch((error) => {
  //     // Handle Errors here.
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // The email of the user's account used.
  //     const email = error.customData.email;
  //     // The AuthCredential type that was used.
  //     const credential = GoogleAuthProvider.credentialFromError(error);
  //     // ...
  //   });
  
  
  // }
  
 
}

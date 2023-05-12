import { Component } from '@angular/core';
import { getAuth, signOut, signInWithEmailAndPassword ,onAuthStateChanged} from "firebase/auth";
import { AppComponent } from 'src/app/app.component';
//import {firebase} from 'firebase/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  user=""
  password=""

  constructor(private router:Router) {}
  login()
  {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.user,this.password)
       .then((userCredential) => {

      //   const user = userCredential.user;
      //   // console.log(this.user);
      //   // console.log(this.password);
   
         onAuthStateChanged(auth, (user) => {
          if (user) {
            const uid = user.uid;
            console.log("uerid",uid)
            this.router.navigate(['/home']);
          } else {
            console.log("signout");
            this.router.navigate(['/tab3']);
          }
        });
       })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("errorcode",errorCode);
        console.log("errorMessage",errorMessage);
        console.log("not created");
        
      });


  }
  logout(){
   
  }
  currentlysignin(){
    

const auth = getAuth();

  }

}

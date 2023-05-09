import { Component } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  user=" "
  password=" "

  constructor() {}
  createaccount()
  {
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
        alert("error");

      });


  }

}

import { Component, OnInit } from '@angular/core';
import { getAuth,onAuthStateChanged } from 'firebase/auth';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.page.html',
  styleUrls: ['./userdetails.page.scss'],
})
export class UserdetailsPage implements OnInit {
  email:any
  uid:any
  displayName:any

  constructor() { 
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("userid",uid)
      } else {
        console.log("signout");
      }
    });
    const user = auth.currentUser;
if (user !== null) {
  
  this.displayName = user.displayName;
   this.email = user.email;
  const photoURL = user.photoURL;
  const emailVerified = user.emailVerified;

  this.uid = user.uid;
  console.log('email',this.email);
  //window.alert(email);
  console.log('uid',this.uid);
}
  }

  ngOnInit() {
  }
 

 

}

import { Component } from '@angular/core';
import { getAuth, signOut, signInWithEmailAndPassword ,onAuthStateChanged} from "firebase/auth";
import { AppComponent } from 'src/app/app.component';
//import {firebase} from 'firebase/auth';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  email=""
  password=""

  constructor( public manual:FirebaseService,private router:Router) {

    manual.login(this.email,this.password)
    // this.router.navigate(['/admin-login']);
  }
  

  
  logout(){
   
  }
  currentlysignin(){
    

const auth = getAuth();

  }
}

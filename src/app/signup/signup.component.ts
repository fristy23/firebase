import { Component, OnInit } from '@angular/core';
import { getAuth,signInWithPopup,createUserWithEmailAndPassword,GoogleAuthProvider } from 'firebase/auth';
import { Router } from '@angular/router'; 
const provider = new GoogleAuthProvider();
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent  implements OnInit {

 
  constructor(private router:Router) { }
  
  

  ngOnInit() {}
  signup(){
    this.router.navigate(['/tab1']);
  }

}


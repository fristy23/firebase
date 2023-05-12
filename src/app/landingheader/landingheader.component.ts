import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";



// const db = getFirestore();
@Component({
  selector: 'app-landingheader',
  templateUrl: './landingheader.component.html',
  styleUrls: ['./landingheader.component.scss'],
})
export class LandingheaderComponent  implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}
  signup(){
    this.router.navigate(['/tab1']);
  }
  login(){
    this.router.navigate(['/tab3']);
  }
 

}

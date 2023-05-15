import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signOut, signInWithEmailAndPassword ,onAuthStateChanged} from "firebase/auth";
//import {app} from 'src/app/app.component';
import { Router } from '@angular/router';
// Initialize Firebase
import { collection, addDoc, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9pAEmHyFyeJDBtl4RdVr2rArGDWo8AnE",
  authDomain: "fristy-fd454.firebaseapp.com",
  databaseURL: "https://fristy-fd454-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fristy-fd454",
  storageBucket: "fristy-fd454.appspot.com",
  messagingSenderId: "552838255360",
  appId: "1:552838255360:web:1be400e2d5896ceeef19e5",
  measurementId: "G-XTSQEC3T86"
};

const app = initializeApp(firebaseConfig);
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private router:Router) { }
  
  createaccount(user:any,email:any,password:any) {
    
    const auth = getAuth();
    createUserWithEmailAndPassword(auth,email,password)
      .then((userCredential) => {

        const user = userCredential.user;
        // console.log(this.user);
        // console.log(this.password);
        alert("Succesful created account");
        console.log("created");
        this.router.navigate(['/logout']);
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("not created account");
        alert("Please Created Account!!");


      });
      this.add(user,email,password);
  }

  login(email:any,password:any)
  {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email,password)
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

  async add(user:string,email:any,password:any) {
    try {
      const db = getFirestore();
      const docRef = await addDoc(collection(db, "users"), {
        user:user,
        Email:email,
        password:password
        
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
}

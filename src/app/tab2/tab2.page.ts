import { Component, ɵɵpureFunction3 } from '@angular/core';
import { getDatabase, ref, set, child, onValue } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { AppComponent } from '../app.component';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { getAuth, updateEmail } from 'firebase/auth';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { sendSignInLinkToEmail, sendEmailVerification } from "firebase/auth";





const dbRef = ref(getDatabase());
const db = getFirestore();
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  async read() {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }



}





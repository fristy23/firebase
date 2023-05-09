import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9pAEmHyFyeJDBtl4RdVr2rArGDWo8AnE",
  authDomain: "fristy-fd454.firebaseapp.com",
  databaseURL: "https://fristy-fd454-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fristy-fd454",
  storageBucket: "fristy-fd454.appspot.com",
  messagingSenderId: "552838255360",
  appId: "1:552838255360:web:1be400e2d5896ceeef19e5",
  measurementId: "G-XTSQEC3T86",
  
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const db = getFirestore(app);



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
 
  }

  
}

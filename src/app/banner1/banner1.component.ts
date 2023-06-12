import { Component, OnInit } from '@angular/core';
import { doc, getDoc,getDocs,Timestamp,collection, getFirestore,deleteDoc, updateDoc, deleteField  } from "firebase/firestore";
const db = getFirestore();
@Component({
  selector: 'app-banner1',
  
  templateUrl: './banner1.component.html',
  styleUrls: ['./banner1.component.scss'],
})
export class Banner1Component  implements OnInit {

  constructor() { }

  ngOnInit() {}


}
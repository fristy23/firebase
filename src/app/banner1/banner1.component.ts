import { Component, OnInit } from '@angular/core';
import { doc, getDoc,getDocs,Timestamp,collection, getFirestore,deleteDoc, updateDoc, deleteField  } from "firebase/firestore";

const db = getFirestore();
@Component({
  selector: 'app-banner1',
  templateUrl: './banner1.component.html',
  styleUrls: ['./banner1.component.scss'],
})
export class Banner1Component  implements OnInit {

  collectbannerdata:any=[this.alldocument()];
  constructor() { }

  ngOnInit() {}
  async  alldocument()
  {
   console.log("alldocument");
   var list:any=[];
 const querySnapshot = await getDocs(collection(db, "banner"));
 querySnapshot.forEach((doc) => {
   // doc.data() is never undefined for query doc snapshots
   //console.log(doc.id, " => ", doc.data());
   list.push(doc.data())
 });
 this.collectbannerdata = list;
 console.log(this.collectbannerdata)
  }
 
}

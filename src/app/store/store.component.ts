import { Component, OnInit } from '@angular/core';
import { doc, getDoc,getDocs,Timestamp,collection, getFirestore,deleteDoc, updateDoc, deleteField  } from "firebase/firestore";


const db=getFirestore();
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent  implements OnInit {

  constructor() {
    this.alldocument();
   }
  collectstoredata:any=[this.alldocument()];
  ngOnInit() {}
  async  alldocument()
 {
  console.log("alldocument");
  var list:any=[];
const querySnapshot = await getDocs(collection(db, "store"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  //console.log(doc.id, " => ", doc.data());
  list.push(doc.data())
});
this.collectstoredata = list;
console.log(this.collectstoredata)
 }
}



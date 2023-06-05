import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { doc, getDoc,getDocs,Timestamp,collection, getFirestore,deleteDoc, updateDoc, deleteField  } from "firebase/firestore";

const db=getFirestore();

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent  implements OnInit {
  tableData: any[] = [
    { Name: 'John', age: 25 },
    { Name: 'Sarah', age: 30 },
    { Name: 'Michael', age: 35 }
  ];
  collectusersdata:any=[this.alldocument()];
  constructor(public btn:ButtonComponent) {
    btn.getButton('Search');
   }

  ngOnInit() {}
  async  alldocument()
 {
  console.log("alldocument");
  var list:any=[];
const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  //console.log(doc.id, " => ", doc.data());
  list.push(doc.data())
});
this.collectusersdata = list;
console.log(this.collectusersdata)
 }
}




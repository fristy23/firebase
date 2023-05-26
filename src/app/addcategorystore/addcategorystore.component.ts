import { Component, OnInit } from '@angular/core';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";


@Component({
  selector: 'app-addcategorystore',
  templateUrl: './addcategorystore.component.html',
  styleUrls: ['./addcategorystore.component.scss'],
})
export class AddcategorystoreComponent  implements OnInit {
  image=" "
  name=" "
  constructor() { }

  ngOnInit() {}
  
  
  
  file(event:any){
    this.image=event.target.value;
  }
  category(event:any){
    this.name=event.target.value;
  }
  async add() {
    try {
      const db = getFirestore();
      const docRef = await addDoc(collection(db, "store"), {
        image:this.image,
        name:this.name
        
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
}
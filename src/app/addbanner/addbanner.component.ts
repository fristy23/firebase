import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { doc, getDoc } from "firebase/firestore";
const db=getFirestore();
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-addbanner',
  templateUrl: './addbanner.component.html',
  styleUrls: ['./addbanner.component.scss'],
})
export class AddbannerComponent  implements OnInit {
  imgname=""
   image="";
  state=""
  vendor=""
  keyword=""
  city=""
  udata=""
  a:any
  constructor() { }

  ngOnInit() {}
  img(event:any){
    this.image=event.target.value;
  }
  bstate(event:any){
    this.state=event.target.value;
    
  }
  bcity(event:any){
    this.city=event.target.value;
    
  }
  bvendor(event:any){
    this.vendor=event.target.value;
    
  }
  bkeyword(event:any){
    this.keyword=event.target.value;
    
  }
 
    async add() {
      try {
        const db = getFirestore();
        const docRef = await addDoc(collection(db, "banner"), {
          image:this.image,
          city:this.city,
          vendor:this.vendor,
          keyword:this.keyword,
          state:this.state,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    
  }
  
}

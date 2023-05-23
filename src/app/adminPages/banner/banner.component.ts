import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddbannerComponent } from 'src/app/addbanner/addbanner.component';
import { doc, getDoc, getFirestore,deleteDoc, updateDoc, deleteField  } from "firebase/firestore";
const db = getFirestore();
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  userdata: any = "";
  city = "";
  state="";
  photo="";
  Timestamp="";
  Number="";
  keyword="";
  constructor(private router: Router, private addbanner: AddbannerComponent) {
   this.show();
   }

  ngOnInit() { }
  addfinalbanner() {
    this.router.navigate(['/addfinalbanner']);
  }
  
  async show() 
  {
   const docRef = doc(db, "banner", "BUH40n7fmqwFWbbIcg4y");
   const docSnap = await getDoc(docRef);

   if (docSnap.exists()) {
     console.log("Document data:", docSnap.data());
     this.userdata = docSnap.data()
     this.city= this.userdata.city
     this.state=this.userdata.state
   } else {
     console.log("No such document!");
   }
  
 }
 async deletebanner(){
  await deleteDoc(doc(db, "banner", "BUH40n7fmqwFWbbIcg4y"));
  console.log("delete");
 }

 async delete(){
  const docRef = doc(db, "banner", " BUH40n7fmqwFWbbIcg4y");
  await updateDoc(docRef, {
    capital: deleteField()
  });
 }
}


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getStorage, ref } from "firebase/storage";
import { AddbannerComponent } from 'src/app/addbanner/addbanner.component';
import { doc, getDoc,getDocs,Timestamp,collection, getFirestore,deleteDoc, updateDoc, deleteField  } from "firebase/firestore";
import { timeStamp } from 'console';

const db = getFirestore();
const storage = getStorage();
const pathReference = ref(storage, 'img/about.jpg');
  const gsReference = ref(storage, 'https://firebasestorage.googleapis.com/v0/b/fristy-fd454.appspot.com/o/Screenshot%20(1).png?alt=media');
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})

export class BannerComponent implements OnInit {
  
 
  collectbannerdata:any=[this.alldocument()];
  userdata: any = "";
  city ="";
  state="";
  photo="";
  timestamp=Timestamp.fromDate(new Date("may 24,2023"));
  Number="";
  keyword="";
  img:any="";
  blobImageSrc="gs://fristy-fd454.appspot.com/Screenshot (4).png";
  constructor(private router: Router, private addbanner: AddbannerComponent) {
  //  this.show();
      this.alldocument()
      
      // this.loadblobimage();s
   }

  ngOnInit() { }
  addfinalbanner() {
    this.router.navigate(['/addfinalbanner']);
  }
  
  async show() 
  {
   const docRef = doc(collection(db, "banner"), "BeoKqzlNHIJGSls0asWa");
   console.log(docRef);
   const docSnap = await getDoc(docRef);
   console.log("collection",docSnap.data());
   if (docSnap.exists()) {
     console.log("Document data:", docSnap.data());
     this.userdata = docSnap.data()
     this.city= this.userdata.city
     this.state=this.userdata.state
   } else {
     console.log("No such document!");
   }
  
 }
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
 async deletebanner(){
  await deleteDoc(doc(db, "banner", "BeoKqzlNHIJGSls0asWa  "));
  console.log("delete");
 }

 async delete(){
  const docRef = doc (db, "banner", " BeoKqzlNHIJGSls0asWa  ");
  await updateDoc(docRef, {
    capital: deleteField()
  });
 }



}




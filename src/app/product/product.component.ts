import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getFirestore } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { getDocs, Timestamp, collection, } from "firebase/firestore";
const db = getFirestore();
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent  implements OnInit {
  productdata: any = ""
  Description=""
  constructor(public router:Router) { 
    this.read();
    this.show();
  }

  ngOnInit() {}
  addproduct(){
    this.router.navigate(['addproduct']);
  }
  async show()
  {
const docRef = doc(db, "Product ", "sXLnLny0baAhXTJgBJdz");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
  this.productdata=docSnap.data();
   this.Description=this.productdata.Description;
  // this.firstName=this.employeeData.firstName;
  // this.lastName=this.employeeData.lastName;
  // this.userName=this.employeeData.userName;
  // this.Email=this.employeeData.email;
  // this.Date=this.employeeData.Date
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}
  }

  
  async read() {
    console.log("alldocument");
    var list: any = [];
    const querySnapshot = await getDocs(collection(db, "Product"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //console.log(doc.id, " => ", doc.data());
      list.push(doc.data())
    });
    this.productdata = list;
    console.log('21!1');

  }

  
}

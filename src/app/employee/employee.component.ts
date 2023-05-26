import { Component, OnInit } from '@angular/core';
import { doc, getDoc } from "firebase/firestore";
import { Router } from '@angular/router';
import { getFirestore } from "firebase/firestore";
import {deleteDoc, updateDoc, deleteField  } from "firebase/firestore";

const db = getFirestore();
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent  implements OnInit {

  constructor( private router:Router) {
    this.show()
   }
employeeData:any=""
userName=""
Email=""
Number=""
firstName=""
lastName=""
Date=""
  ngOnInit() {}
  adminemploye(){ 
    this.router.navigate(['/']);
  }

  addemployee()
  {
    this.router.navigate(['/addemployee'])
  }

async show()
  {
const docRef = doc(db, "employee", "1bllEH1pVRlrDIZCEuca");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
  this.employeeData=docSnap.data();
  this.Number=this.employeeData.Number;
  this.firstName=this.employeeData.firstName;
  this.lastName=this.employeeData.lastName;
  this.userName=this.employeeData.userName;
  this.Email=this.employeeData.email;
  this.Date=this.employeeData.Date
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}
  }
  

  async delete(){
    await deleteDoc(doc(db, "employee", "1bllEH1pVRlrDIZCEuca")); 
    console.log("delete");
   }
  

}

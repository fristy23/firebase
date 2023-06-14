import { Component, OnInit,ElementRef } from '@angular/core';
import { doc, getDoc } from "firebase/firestore";
import { Router } from '@angular/router';
import { getFirestore } from "firebase/firestore";
import { deleteDoc, updateDoc, deleteField } from "firebase/firestore";
import { getDocs, Timestamp, collection, } from "firebase/firestore";
import { timeStamp } from 'console';

const db = getFirestore();
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {

  constructor(private router: Router,public elRef:ElementRef) {
    this.read();
  }
  employeeData: any = ""
  userName = ""
  Email = ""
  Number = ""
  firstName:any 
  lastName = ""
  Date = ""
  search = ""


  ngOnInit() { }
  adminemploye() {
    this.router.navigate(['/']);
  }

  addemployee() {
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


  async delete() {
    await deleteDoc(doc(db, "employee", "1bllEH1pVRlrDIZCEuca"));
    console.log("delete");
  }

  async read() {
    console.log("alldocument");
    var list: any = [];
    const querySnapshot = await getDocs(collection(db, "employee"));
    querySnapshot.forEach((doc) => {
    
      list.push(doc.data())
    });
    this.employeeData = list;
  }

  Search(event: any) {
    this.search = event.target.value;
    for (let i of this.employeeData) {
      if (i.firstName == this.search || i.lastName == this.search || i.email == this.search || i.Number === this.search) {
        window.alert("data is present in table");
       const table = this.elRef.nativeElement.querySelector("table") as HTMLTableElement;
       const targetCell = i.firstName
       targetCell.style.color = "red";
        break; 
      } 
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Injectable } from '@angular/core';
import { NgModule } from '@angular/core';
import { SharedServiceService } from 'src/app/services/shared-service.service';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.scss'],
})
@Injectable({
  providedIn: 'root'
})
export class AddemployeeComponent  implements OnInit {
  
  
  
  user:string=""
  FirstName=""
  LastName=""
  Email=""
  Phone=""
  Date=""
 
 
  userField(event:any) {
   this.user=event.target.value
  //  console.log(event.target.value)
  }
  Fname(event:any) {
    this.FirstName=event.target.value
    
   }
   Lname(event:any) {
    this.LastName=event.target.value
    
   }
   EmailField(event:any) {
    this.Email=event.target.value
    
   }
   PhoneField(event:any) {
    this.Phone=event.target.value
    
   }
   DateField(event:any)
   {
    this.Date=event.target.value
   }
  
   async add() {
    try {
      const db = getFirestore();
      const docRef = await addDoc(collection(db, "employee"), {
        userName:this.user,
        firstName:this.FirstName,
        lastName:this.LastName,
        email:this.Email,
        Number:this.Phone,
        Date:this.Date
        
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  
 
  ngOnInit() {}
  
}

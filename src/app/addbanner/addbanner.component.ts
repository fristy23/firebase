import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { doc, getDoc } from "firebase/firestore";
import { FirebaseStorage } from 'firebase/storage';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const db=getFirestore();
const storage = getStorage();
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-addbanner',
  templateUrl: './addbanner.component.html',
  styleUrls: ['./addbanner.component.scss'],
})
export class AddbannerComponent  implements OnInit {
 

  image:any=""
  state=""
  vendor=""
  keyword=""
  city=""
  udata=""
  a:any
  fileName:any
  constructor() { }
  

  ngOnInit() {}

  
  img(event:any){
    this.image=event.target.files[0];
    this.fileName=this.image.name;

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
          
          image:"https:firebasestorage.googleapis.com/v0/b/fristy-fd454.appspot.com/o/"+ this.fileName+"?alt=media&token=6219c186-a39f-41af-a72a-40b87a0047c5&_gl=1*cmppby*_ga*MTk2NjgxNzgzOC4xNjgyNzk0NjU0*_ga_CW55HF8NVT*MTY4NTM2MzA2Mi4zOC4xLjE2ODUzNjc0MTguMC4wLjA" ,
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
   
 

  // Create a root reference
  
  upload()
  {
    
 
  /** @type {any} */
  const metadata = {
    contentType: 'image/jpg'
  };
  
  // Upload file and metadata to the object 'images/mountains.jpg'
  const storageRef = ref(storage,this.fileName);
  const uploadTask = uploadBytesResumable(storageRef, this.image, metadata);
  console.log("uploadtask",uploadTask)
  console.log("storageRef",storageRef);
  
  // Listen for state changes, errors, and completion of the upload.
  uploadTask.on('state_changed',
    (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
      }
    }, 
    (error) => {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;
        case 'storage/canceled':
          // User canceled the upload
          break;
  
        // ...
  
        case 'storage/unknown':
          // Unknown error occurred, inspect error.serverResponse
          break;
      }
    }, 
    () => {
      // Upload completed successfully, now we can get the download URL
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
      });
    }
  );
  
  this.add();
  }  
}

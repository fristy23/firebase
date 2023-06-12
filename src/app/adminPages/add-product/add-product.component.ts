import { Component, OnInit } from '@angular/core';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
const db = getFirestore();
const storage = getStorage();
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent  implements OnInit {

  constructor() { }
  Category:string=""
  image:any
  Name:string=""
  Description:string=""
  SellPrice=""
  fileName:any
  Color:string=""
  ngOnInit() {}

select:string=""
selectOption(event:any)
{
   this.select=event.target.value;
}
selectColor(event:any)
{
  this.Color=event.target.value;
}

  img(event: any) {
    
    this.image = event.target.files[0];
    this.fileName = this.image.name;
    console.log("img",this.fileName,event);

  }
  NameValue(event:any)
  {
    this.Name=event.target.value;
  }
  DescriptionValue(event:any)
  {
     this.Description=event.target.value;
  }
  SellPriceValue(event:any)
  {
    this.SellPrice=event.target.value;
  }


  async add() {
    
    try {
      const db = getFirestore();
      const docRef = await addDoc(collection(db, "Product"), {
        image: "https:firebasestorage.googleapis.com/v0/b/fristy-fd454.appspot.com/o/" + this.fileName + "?alt=media&token=6219c186-a39f-41af-a72a-40b87a0047c5&_gl=1*cmppby*_ga*MTk2NjgxNzgzOC4xNjgyNzk0NjU0*_ga_CW55HF8NVT*MTY4NTM2MzA2Mi4zOC4xLjE2ODUzNjc0MTguMC4wLjA",
        Name: this.Name,
        Description:this.Description,
        SellPrice: this.SellPrice,
        selectOption:this.select,
        selectColor:this.Color

      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    window.alert("Success !")
  }
  upload() {
   
    if (this.Name == "" || this.Description == "" || this.SellPrice == "") {
      window.alert("please fill the details properly");
    }
    else {
      
      /** @type {any} */
      const metadata = {
        contentType: 'image/jpg'
      };

      // Upload file and metadata to the object 'images/mountains.jpg'
      const storageRef = ref(storage, this.fileName);
      const uploadTask = uploadBytesResumable(storageRef, this.image, metadata);
      console.log("uploadtask", uploadTask)
      console.log("storageRef", storageRef);

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
}

import { Component, ɵɵpureFunction3 } from '@angular/core';
import { getDatabase, ref, set, child,onValue } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { AppComponent } from '../app.component';
import { collection, addDoc ,getDocs} from "firebase/firestore"; 



const dbRef = ref(getDatabase());
const db = getFirestore();
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  name = "yatharth "
  userId = "122"
  email = " yatharthjain@gmail.com"
  imageUrl = ""
  postId=" "
 
  constructor() { }
//   writeUserData(userId: any, name: any, email: any) {
//     set(ref(db, 'users/' + userId), {
//       username: name,
//       email: email,
//     });
//   }
//   read(){
    
//   const starCountRef = ref(db, 'posts/' + this.postId+ '/starCount');
//   onValue(starCountRef, (snapshot) => {
//     const data = snapshot.val();
//    function updateStarCount(postElement:any, data:any){
//     throw new Error('Function not implemented');
//    };
//   });
// }
async add(){
try {
  const db = getFirestore();
  
  const docRef = await addDoc(collection(db, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}

}
async read(){
  const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});
}

}





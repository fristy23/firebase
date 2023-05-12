import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}
  logout(){
      const auth = getAuth();
      signOut(auth).then(() => {
        this.router.navigate(['/landing']);
      }).catch((error) => {
  
        alert("error in logout!!");
      });
  }
  userdetails(){
    this.router.navigate(['/userdetails']);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.scss'],
})
export class AdminprofileComponent  implements OnInit {

  constructor(private router:Router) { 
   
  }

  ngOnInit() {}
  employee(){
    this.router.navigate(['/employee']);
  }
  user(){
    this.router.navigate(['/user']);
  }

}

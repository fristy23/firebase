import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private router:Router) {
   
   }

  ngOnInit() {
  }
  adminprofile(){
    this.router.navigate(['/adminprofile']);
  }
  employee(){
    this.router.navigate(['/operstions']);
  }
 

}

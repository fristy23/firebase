import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FirebaseService} from 'src/app/services/firebase.service'; 


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.page.html',
  styleUrls: ['./admin-login.page.scss'],
})
export class AdminLoginPage implements OnInit {

  constructor(private router:Router,public AdminLogin:FirebaseService) { }

  ngOnInit() {
  }

  userlogin(){
    this.router.navigate(['/tab3']);
  }
  dashboard(){
    this.router.navigate(['/admindashboard']);
  }

}

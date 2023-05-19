import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  adminuser(){
    this.router.navigate(['/user']);
  }
  adminemploye(){
    this.router.navigate(['/employee']);
  }
  adminvendors(){
    this.router.navigate(['/vendors']);
  }
  adminbanner(){
    this.router.navigate(['/banners']);
  }
  adminproduct(){
    this.router.navigate(["/product"]);
  }
  adminstore(){
    this.router.navigate(["/store"]);
  }
  adminaccount(){
    this.router.navigate(["/account"]);
  }
  adminrecharge(){
    this.router.navigate(["/recharge"]);
  }
  admintransactions(){
    this.router.navigate(["/transactions"]);
  }
   adminorders(){
    this.router.navigate(["/orders"]);
  }




}

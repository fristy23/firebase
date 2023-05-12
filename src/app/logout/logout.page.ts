import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tab3Page } from '../tab3/tab3.page';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  login(){
    this.router.navigate(['/tab3']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner2',
  templateUrl: './banner2.component.html',
  styleUrls: ['./banner2.component.scss'],
})
export class Banner2Component  implements OnInit {

  constructor(public router:Router) { 

  }

  ngOnInit() {}
  shopnow(){
    this.router.navigate(['shopnow']);
  }

}

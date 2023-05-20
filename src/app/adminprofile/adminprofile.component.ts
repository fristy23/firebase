import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.scss'],
})
export class AdminprofileComponent  implements OnInit {

  constructor(private router:Router) { 
    // this.router.navigate(['/dashboard']);
    // this.router.navigate(['/adminprofile']);
  }

  ngOnInit() {}

}

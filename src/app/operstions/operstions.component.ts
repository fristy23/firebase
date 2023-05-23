import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-operstions',
  templateUrl: './operstions.component.html',
  styleUrls: ['./operstions.component.scss'],
})
export class OperstionsComponent  implements OnInit {

  constructor(private router:Router) {
  
   }

  ngOnInit() {}
  employee(){
    this.router.navigate(['/adminprofile']);
  }

}

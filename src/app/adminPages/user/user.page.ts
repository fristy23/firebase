import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from 'src/app/components/button/button.component';
@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})




export class UserPage implements OnInit {

  tableData: any[] = [
    { Name: 'John', age: 25 },
    { Name: 'Sarah', age: 30 },
    { Name: 'Michael', age: 35 }
  ];

  constructor(public btn:ButtonComponent) {

    btn.getButton('Search');
   }

  ngOnInit() {
  }

  


  
}

import { Component, OnInit } from '@angular/core';
import { getElement } from 'ionicons/dist/types/stencil-public-runtime';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.page.html',
  styleUrls: ['./banners.page.scss'],
})

export class BannersPage implements OnInit {
  tableData: any[] = [
    { Name: 'John', age: 25 },
    { Name: 'Sarah', age: 30 },
    { Name: 'Michael', age: 35 }
  ];
  
 constructor() { }
row=this.tableData
  ngOnInit() {
  }
  delete(){
    
      this.tableData.splice(1);
    
    
  }

}

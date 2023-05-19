import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.page.html',
  styleUrls: ['./employee.page.scss'],
})
export class EmployeePage implements OnInit {
  tableData: any[] = [
    { Name: 'John', age: 25 },
    { Name: 'Sarah', age: 30 },
    { Name: 'Michael', age: 35 }
  ];

  constructor(private router:Router) { }

  ngOnInit() {
  }
  adminemploye(){
    this.router.navigate(['/']);
  }

}

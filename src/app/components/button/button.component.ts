import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
@Injectable({
  providedIn: 'root'
})
export class ButtonComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

getButton(Bname:string)
{
  return Bname
}

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor() { }

  private sharedValue: any;

  setSharedValue(value: any) {
    this.sharedValue = value;
  }

  getSharedValue() {
    return this.sharedValue;
  }
}

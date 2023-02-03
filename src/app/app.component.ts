import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  orignal: any = '';
  constructor(private ser: DataService) {
    this.ser.cData.subscribe((val) => {
      this.orignal = val;
    });
  }
  submitData(fname: any, lname: any) {
    console.log(this.orignal, fname, lname);
  }
}

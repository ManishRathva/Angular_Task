import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent{
// @Output() parentFunction:EventEmitter<any> = new EventEmitter();
// @Input() countryinp: string | undefined;
// @Output() countryEvt = new EventEmitter();
// @Input() state:string | undefined;
// @Input() city:string | undefined;

// onCountry(countrydata:any){
//  this.countryinp = countrydata;
//  this.countryEvt.emit(countrydata);
// }

//  public addChilddata(data:any){
//   this.parentFunction.emit(data);
// }
//   addState(data2:any){
//  this.parentFunction.emit(data2)
//   }
//   addCity(data3:any){
// this.parentFunction.emit(data3);
//   }
@Input() sharedVar: string | undefined;
@Output() sharedVarChange = new EventEmitter();
change(newValue:any) {
  this.sharedVar = newValue;
  this.sharedVarChange.emit(newValue);
}
}

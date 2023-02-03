import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{
childValue:any={country:'', state :'',city:''}
constructor(private dataServices:DataService){}
ngOnInit(): void {
}
changeValues(){
this.dataServices.dataChange(this.childValue);
}
}

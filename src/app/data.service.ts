import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  cData=new Subject<any>();
  constructor() { }

  dataChange(newData:any){
    this.cData.next(newData);
  }
}


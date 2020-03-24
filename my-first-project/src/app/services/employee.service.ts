import { Injectable, asNativeElements } from '@angular/core';
 
import {AngularFireDatabase} from 'angularfire2/database'
import {FirebaseListObservable,FirebaseObjectObservable} from '@angular/fire/database-deprecated';
import {Observable} from 'rxjs';
import {Employee} from '../Employee';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees :FirebaseListObservable <any[]>;
  Employee:FirebaseObjectObservable <any>;

  constructor( public af :AngularFireDatabase) {
   this.employees=this.af.list("/employees/employees") as unknown as FirebaseListObservable<Employee[]>


  }
  getEmployees(){
    return  this.employees  ;
  }
}

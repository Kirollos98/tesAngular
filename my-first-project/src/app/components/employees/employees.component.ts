import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../services/employee.service';
import {Employee} from '../../Employee';
import {Subscription}  from "rxjs";
import {Observable} from 'rxjs';
import { from } from 'rxjs';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees :Employee[];
  
  constructor(public employeeService :EmployeeService) {
   
   }

   
 

  ngOnInit(): void {
   
  }
  getemployeeName(){
    return this.employeeService.getEmployees().subscribe(employees=>{
     this.employees=employees;
     console.log(this.employees);
   });
}




}

import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';
import { Employee } from '../models/employee';


@Component({
  selector: 'app-ngfordemo1',
  templateUrl: './ngfordemo1.component.html',
  styleUrls: ['./ngfordemo1.component.css']
})
export class Ngfordemo1Component implements OnInit {

  employList :Employee[] =null;

  constructor(empService:EmployeeserviceService) { 
    console.log("This is Const");

    this.employList = empService.getEmployees();
    console.log(this.employList);
  }

  ngOnInit() {

  }

  
}

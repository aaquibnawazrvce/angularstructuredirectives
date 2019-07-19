import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: '.app-ngfordemo3',
  templateUrl: './ngfordemo3.component.html',
  styleUrls: ['./ngfordemo3.component.css']
})
export class Ngfordemo3Component implements OnInit {

  

  private _empList : Employee[];

  constructor(empSer:EmployeeserviceService) {
      this._empList = empSer.getEmployees();
   }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeserviceService } from '../employeeservice.service';


@Component({
  selector: '[app-ngfordemo2]',
  templateUrl: './ngfordemo2.component.html',
  styleUrls: ['./ngfordemo2.component.css']
})
export class Ngfordemo2Component implements OnInit {

  private _emplList:Employee[];

  constructor(empService:EmployeeserviceService) {
    this._emplList = empService.getEmployees();
   }

  ngOnInit() {
  }

}

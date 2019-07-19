import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-ngfordemo4',
  templateUrl: './ngfordemo4.component.html',
  styleUrls: ['./ngfordemo4.component.css']
})
export class Ngfordemo4Component implements OnInit {

  private emp:Employee[];

  constructor(_empService:EmployeeserviceService) {

      this.emp = _empService.getEmployees();
   }

  ngOnInit() {
  }

}

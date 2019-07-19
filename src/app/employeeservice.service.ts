import { Injectable } from '@angular/core';
import { Employees } from './models/employees';
import { Employee } from './models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  constructor() { }

  getEmployees(){

      let emp1:Employee = {

          firstName:"Aaquib",
          lastName:"Nawaz",
          designation:"Senior Software EngineerII",
          experience:"8 Years",
          telecommuter:true,
          age:10,
          currentLocation:"Bangalore Office Ground Floor",
          phonenumber:"204920394"

      }


      let emp2:Employee = {
        firstName:"Shabnaz",
        lastName:"Nawaz",
        designation:"Senior Software EngineerII",
        experience:"8 Years",
        telecommuter:true,
        age:10,
        currentLocation:"Bangalore Office Ground Floor",
        phonenumber:"204920394"
    }

     

      let emp3:Employee = {
        firstName:"Shabnaz",
        lastName:"Nawaz",
        designation:"Senior Software EngineerII",
        experience:"8 Years",
        telecommuter:true,
        age:10,
        currentLocation:"Bangalore Office Ground Floor",
        phonenumber:"204920394"
    }

    let emp4:Employee = {
      firstName:"Shabnaz",
      lastName:"Nawaz",
      designation:"Senior Software EngineerII",
      experience:"8 Years",
      telecommuter:true,
      age:25,
      currentLocation:"Bangalore Office Ground Floor",
      phonenumber:"204920394"
  }

      return [emp1,emp2,emp3,emp4];

  }
 
}
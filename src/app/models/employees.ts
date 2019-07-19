import { Employee } from './employee';

export class Employees {

    private _employee : Employee;

    constructor(emp:Employee){
        this._employee = emp;
    }

    public getEmployee(){
      return this._employee;
    }



}
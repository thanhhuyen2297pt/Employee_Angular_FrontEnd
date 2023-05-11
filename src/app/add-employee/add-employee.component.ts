/*https://angular.io/start/start-forms*/
import { Component } from '@angular/core';
import {Employee} from "../employee";
import {EmployeeService} from "../employee.service";
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  // @ts-ignore
  employee: Employee = new Employee();
  constructor(
    private employeeService: EmployeeService,
  ){}

  saveEmployee(){
    this.employeeService.addEmployee(this.employee)
      .subscribe(
        data =>{window.alert("Save employee " + this.employee.firstName +" success!");},
      error => window.alert(error)
      );
  }

  onSubmit(): void {
    console.log(this.employee);
    this.saveEmployee();
  }
}

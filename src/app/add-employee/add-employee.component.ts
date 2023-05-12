/*https://angular.io/start/start-forms*/
import { Component } from '@angular/core';
import {Employee} from "../employee";
import {EmployeeService} from "../employee.service";
import { Router } from '@angular/router';
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
    private router: Router
  ){}

  saveEmployee(){
    this.employeeService.addEmployee(this.employee)
      .subscribe(
        data =>{window.alert("Save employee " + this.employee.firstName +" success!");
          this.showListEmployee();
          },
      error => window.alert(error)
      );
  }

  showListEmployee(){
    this.router.navigate(['/employee']);
  }

  onSubmit(): void {
    console.log(this.employee);
    this.saveEmployee();
  }
}

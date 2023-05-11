import {Component, OnInit} from '@angular/core';
import {Employee} from "../employee";
import {EmployeeService} from "../employee.service";

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent{

  id: number | undefined;
  employee: Employee = new Employee();

  constructor(
    private employeeService: EmployeeService,
  ) {
  }
  //
  // ngOnInit(): void {
  //   this.id = this.
  //
  // }
  //
  // saveEmployee() {
  //   this.employeeService.updateEmployee(this.id, this.employee)
  //     .subscribe(
  //       data => {
  //         window.alert("Save employee " + this.employee.firstName + " success!");
  //       },
  //       error => window.alert(error)
  //     );
  // }
  //
  // onSubmit(): void {
  //   console.log(this.employee);
  //   this.saveEmployee();
  // }
}

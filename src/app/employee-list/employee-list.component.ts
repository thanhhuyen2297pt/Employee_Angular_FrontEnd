import {Component, OnInit} from '@angular/core';
import {Employee} from "../employee";
import {EmployeeService} from "../employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{
  employees: Employee[] | undefined;

  constructor(
    private employeeService: EmployeeService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  //Find All
  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {   //lắng nghe kết quả API trả về
      this.employees = data;
      console.log("getEmployees ", data);
    });
  }

  // private updateEmployee(id: number){
  //   this.router.navigate(['update-employee', id]);
  // }

  deleteEmployee(id: number | undefined){
    this.employeeService.deleteRowEmployee(id).subscribe( data => {
      console.log("deleteEmployee id:", id);
      this.getEmployees();
    })
  }
}

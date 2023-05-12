import {Component, OnInit} from '@angular/core';
import {Employee} from "../employee";
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeService} from "../employee.service";

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {
  id: number | undefined;
  employee: Employee = new Employee();

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.id = this.route.snapshot.params['id'];

    this.employeeService.getDetailEmployeeById(this.id).subscribe(data => {

      console.log("ViewEmployee id:", this.id);
      this.employee = data;
    })

  }
}

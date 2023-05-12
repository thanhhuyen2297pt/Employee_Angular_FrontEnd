import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeInfoComponent} from "./employee-info/employee-info.component";
import { AddEmployeeComponent } from "./add-employee/add-employee.component";
import { UpdateEmployeeComponent } from "./update-employee/update-employee.component";

const routes: Routes = [
  { path: '', redirectTo: '/employee', pathMatch: 'full' },
  { path: 'employee', component: EmployeeListComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'info/:id', component: EmployeeInfoComponent },
  { path: 'update-employee', component: UpdateEmployeeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

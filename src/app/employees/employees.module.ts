import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { MaterialModule } from '../material/material.module';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { EmployeeEditComponent } from './pages/employee-edit/employee-edit.component';
import { EmployeesMainLayoutComponent } from './layout/employees-main-layout/employees-main-layout.component';

@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeEditComponent,
    EmployeesMainLayoutComponent,
  ],
  imports: [CommonModule, EmployeesRoutingModule, MaterialModule],
})
export class EmployeesModule {}

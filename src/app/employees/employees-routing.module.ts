import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesMainLayoutComponent } from './layout/employees-main-layout/employees-main-layout.component';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { EmployeeEditComponent } from './pages/employee-edit/employee-edit.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeesMainLayoutComponent,
    children: [
      {
        path: 'new',
        component: EmployeeEditComponent,
      },

      {
        path: 'edit/:id',
        component: EmployeeEditComponent,
      },
      {
        path: 'list',
        component: EmployeeListComponent,
      },

      {
        path: '**',
        redirectTo: 'list',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeesRoutingModule {}

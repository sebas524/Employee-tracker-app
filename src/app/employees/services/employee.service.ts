import { Injectable } from '@angular/core';
import { Employee } from '../interfaces/employee.interface';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  listOfEmployees: Employee[] = [
    {
      fName: 'john',
      lName: 'velez',
      email: 'john@gmail.com',
      maritalStatus: 'single',
      phone: 3232321211,
      sex: 'male',
      startDate: new Date(),
    },
    {
      fName: 'mike',
      lName: 'lezve',
      email: 'mike@gmail.com',
      maritalStatus: 'single',
      phone: 3212321211,
      sex: 'male',
      startDate: new Date(),
    },
    {
      fName: 'johnny',
      lName: 'rueda',
      email: 'rueda@gmail.com',
      maritalStatus: 'single',
      phone: 3232921211,
      sex: 'male',
      startDate: new Date(),
    },
    {
      fName: 'jenny',
      lName: 'schmidt',
      email: 'jenny@gmail.com',
      maritalStatus: 'single',
      phone: 3239921211,
      sex: 'female',
      startDate: new Date(),
    },
    {
      fName: 'franciska',
      lName: 'lee',
      email: 'lee@gmail.com',
      maritalStatus: 'single',
      phone: 3239921281,
      sex: 'female',
      startDate: new Date(),
    },
  ];

  getEmployees(): Employee[] {
    // * return copy of array
    return [...this.listOfEmployees];
    `spread operator ([...]) to create a  copy of the listOfEmployees array. This is done to ensure that the original array remains unchanged when the list of employees is accessed externally.`;
  }

  deleteEmployee(id: number) {
    this.listOfEmployees.splice(id, 1);
  }

  addEmployee(employee: Employee) {
    this.listOfEmployees.unshift(employee);
  }

  getSingleEmployeeByIndex(index: number) {
    return this.listOfEmployees[index];
  }

  // editEmployee(employee: Employee, index: number) {
  //   this.listOfEmployees[index].fName = employee.fName;
  //   this.listOfEmployees[index].lName = employee.lName;
  //   this.listOfEmployees[index].email = employee.email;
  //   this.listOfEmployees[index].phone = employee.phone;
  //   this.listOfEmployees[index].startDate = employee.startDate;
  //   this.listOfEmployees[index].sex = employee.sex;
  //   this.listOfEmployees[index].maritalStatus = employee.maritalStatus;
  // }

  editEmployee(employee: Employee, index: number) {
    this.listOfEmployees[index] = {
      ...this.listOfEmployees[index],
      ...employee,
    };
  }
}

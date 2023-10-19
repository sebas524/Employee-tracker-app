import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../../interfaces/employee.interface';
import { EmployeeService } from '../../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css'],
})
export class EmployeeEditComponent implements OnInit {
  employeeID: number;
  titleAction = 'Add';
  maritalStatus: any[] = ['Single', 'Married', 'Divorced'];

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private route: Router,
    private snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute
  ) {
    this.employeeID = activatedRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    if (this.employeeID !== undefined) {
      this.titleAction = 'Edit';
    }
    this.getEmployeeInfo();
  }

  public myForm: FormGroup = this.fb.group({
    fName: ['', [Validators.required, Validators.maxLength(15)], []],
    lName: ['', [Validators.required], []],
    email: ['', [Validators.required], []],
    phone: ['', [Validators.required], []],
    startDate: ['', [Validators.required], []],
    sex: ['', [Validators.required], []],
    maritalStatus: ['', [Validators.required], []],
  });

  // isFieldValid(form: FormGroup, field: string) {
  //   return form.controls[field].errors;
  // }

  onSave(): void {
    console.log(this.myForm);

    if (this.myForm.invalid) {
      return;
    }
    const employee: Employee = {
      fName: this.myForm.get('fName')?.value,
      lName: this.myForm.get('lName')?.value,
      email: this.myForm.get('email')?.value,
      phone: this.myForm.get('phone')?.value,
      startDate: this.myForm.get('startDate')?.value,
      sex: this.myForm.get('sex')?.value,
      maritalStatus: this.myForm.get('maritalStatus')?.value,
    };

    if (this.employeeID !== undefined) {
      this.editEmployee(employee);
    } else {
      this.addEmployee(employee);
    }

    console.log(this.myForm.value);

    this.route.navigateByUrl('//employees/list');
    this.myForm.reset();
  }

  addEmployee(employee: Employee) {
    this.employeeService.addEmployee(employee);
    this.snackBar.open(
      `${employee.lName}, ${employee.fName} has been added successfully!`,
      'ok',
      {
        duration: 3000,
      }
    );
  }
  editEmployee(employee: Employee) {
    this.employeeService.editEmployee(employee, this.employeeID);
    this.snackBar.open(
      `${employee.lName}, ${employee.fName} has been updated successfully!`,
      'ok',
      {
        duration: 3000,
      }
    );
  }

  getEmployeeInfo() {
    const employee: Employee = this.employeeService.getSingleEmployeeByIndex(
      this.employeeID
    );
    if (!employee) {
      return;
    }
    console.log('fetched employee ingo: ', employee);
    this.myForm.patchValue({
      fName: employee.fName,
      lName: employee.lName,
      email: employee.email,
      phone: employee.phone,
      startDate: employee.startDate,
      sex: employee.sex,
      maritalStatus: employee.maritalStatus,
    });
  }
}

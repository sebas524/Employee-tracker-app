import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../interfaces/employee.interface';
import { MatDialog } from '@angular/material/dialog';
import { MessageComfirmationBoxComponent } from 'src/app/shared/components/message-comfirmation-box/message-comfirmation-box.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements AfterViewInit, OnInit {
  listOfEmployees: Employee[] | undefined;
  displayedColumns: string[] = [
    'fName',
    'lName',
    'email',
    'phone',
    'startDate',
    'sex',
    'maritalStatus',
    'action',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource = new MatTableDataSource<Employee>();

  constructor(
    private employeeService: EmployeeService,
    private snackBar: MatSnackBar,
    public matDialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.loadEmployees();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadEmployees() {
    this.listOfEmployees = this.employeeService.getEmployees();
    this.dataSource = new MatTableDataSource(this.listOfEmployees);

    console.log('EMPLOYEEES', this.listOfEmployees);
  }

  deleteEntry(id: number) {
    const dialogRef = this.matDialog.open(MessageComfirmationBoxComponent, {
      width: '350px',
      data: { message: 'Are you sure you wish to delete this entry?' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'accept') {
        this.employeeService.deleteEmployee(id);
        this.loadEmployees();
        this.snackBar.open('Entry deleted successfully!', 'ok', {
          duration: 3000,
        });
      }
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}

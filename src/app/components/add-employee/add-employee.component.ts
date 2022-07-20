import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  constructor(private router: Router) {}

  employeeForm = new FormGroup({
    name: new FormControl(''),
    salary: new FormControl(''),
    designation: new FormControl(''),
    bio: new FormControl(''),
    dob: new FormControl(''),
  });

  ngOnInit(): void {}

  addEmployee() {
    const storedEmployees = JSON.parse(
      localStorage.getItem('employee-list') || '[]'
    );
    const updatedEmployeeList = [
      {
        id: storedEmployees.length + 1,
        name: this.employeeForm.value.name,
        salary: this.employeeForm.value.salary,
        designation: this.employeeForm.value.designation,
        bio: this.employeeForm.value.bio,
        dob: this.employeeForm.value.dob,
      },
      ...storedEmployees,
    ];
    localStorage.setItem('employee-list', JSON.stringify(updatedEmployeeList));
    this.employeeForm.reset();
    this.router.navigate(['/']);
  }
}

import { Employee } from './../../../types';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  constructor() {}

  employees: Employee[] = JSON.parse(
    localStorage.getItem('employee-list') || '[]'
  );

  ngOnInit(): void {
    if (this.employees.length === 0) {
      localStorage.setItem(
        'employee-list',
        JSON.stringify([
          {
            id: 1,
            name: 'Nero',
            salary: '11000',
            designation: 'Front-End Developer',
            bio: "I build cool stuff, and i'm good at it",
            dob: '2022-07-19',
          },
        ])
      );
      this.employees = JSON.parse(
        localStorage.getItem('employee-list') || '[]'
      );
    }
  }
}

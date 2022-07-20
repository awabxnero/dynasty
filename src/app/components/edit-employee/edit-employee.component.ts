import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],
})
export class EditEmployeeComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  employeeForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    salary: new FormControl(''),
    designation: new FormControl(''),
    bio: new FormControl(''),
    dob: new FormControl(''),
  });

  storedEmployees = JSON.parse(localStorage.getItem('employee-list') || '[]');

  ngOnInit(): void {
    const employee = this.storedEmployees.find(
      (employee: any) => employee.id == this.route.snapshot.paramMap.get('id')
    );

    this.employeeForm.patchValue(employee);
  }

  updateEmployee() {
    const employee = this.employeeForm.value;
    const index = this.storedEmployees.findIndex(
      (employee: any) => employee.id == this.route.snapshot.paramMap.get('id')
    );
    this.storedEmployees[index] = employee;
    localStorage.setItem('employee-list', JSON.stringify(this.storedEmployees));
    this.employeeForm.reset();
    this.router.navigate(['/']);
  }

  removeEmployee() {
    const index = this.storedEmployees.findIndex(
      (employee: any) => employee.id == this.route.snapshot.paramMap.get('id')
    );
    this.storedEmployees.splice(index, 1);
    localStorage.setItem('employee-list', JSON.stringify(this.storedEmployees));
    this.employeeForm.reset();
    this.router.navigate(['/']);
  }
}

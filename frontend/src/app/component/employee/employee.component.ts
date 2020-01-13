import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../../service/EmployeeService';
import {EmployeeDTO} from '../../model/EmployeeDTO';
import {ACTIONS, COLUMNS} from '../../model/Employee';
import {Actions, URLS} from '../../data/URLS';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  header = COLUMNS;
  employees: EmployeeDTO[];
  actions = ACTIONS;

  imageUrl = URLS[Actions.GET_IMG].url;

  currentUser = new EmployeeDTO();


  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {

    this.employeeService.find('').subscribe(data => this.employees = data);
    this.employeeService.getByUUID(window.localStorage.getItem('uuid')).subscribe(user => this.currentUser = user);

  }
}

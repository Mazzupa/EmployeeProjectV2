import {Component, OnInit} from '@angular/core';
import {Employee} from '../../model/Employee';
import {Skill} from '../../model/Skill';
import {MaritalStatus} from '../../model/MaritalStatus';
import {EmployeeService} from '../../service/EmployeeService';
import {SkillsService} from '../../service/SkillsService';
import {MaritalStatusService} from '../../service/MaritalStatusService';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {Password} from '../../model/Password';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  skills: Skill[];
  maritalStatuses: MaritalStatus[];
  employee: Employee = new Employee();
  currentUser;

  onSubmit() {
    this.employeeService.save(this.employee).subscribe(() => this.router.navigate(['/']));
  }

  constructor(
    private employeeService: EmployeeService,
    private skillService: SkillsService,
    private maritalStatusService: MaritalStatusService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router) {
  }

  ngOnInit(): void {

    this.employee = new Employee();
    this.employee.password = new Password();
    this.employee.passwordConfirm = new Password();

    this.skillService.getSkill().subscribe((skills) => this.skills = skills);
    this.maritalStatusService.getMaritalStatus().subscribe((statuses) => this.maritalStatuses = statuses);

    this.employeeService.getByUUID(window.localStorage.getItem('uuid')).subscribe(user => this.currentUser = user);
  }

  customCompare(o1, o2) {
    return o1 && o2 && (o1.id === o2.id);
  }

  goBack(): void {
    this.location.back();
  }
}

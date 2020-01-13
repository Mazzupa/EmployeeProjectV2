import {Component, OnInit} from '@angular/core';
import {Skill} from '../../model/Skill';
import {MaritalStatus} from '../../model/MaritalStatus';
import {EmployeeService} from '../../service/EmployeeService';
import {SkillsService} from '../../service/SkillsService';
import {MaritalStatusService} from '../../service/MaritalStatusService';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {EmployeeDTO} from '../../model/EmployeeDTO';
import {RoleService} from '../../service/RoleService';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  skills: Skill[];
  maritalStatuses: MaritalStatus[];
  uuid: string;

  employeeDTO: EmployeeDTO = new EmployeeDTO();

  currentUsername: string;
  changeUsername = false;

  currentUser;

  onSubmit() {
    this.employeeService.edit(this.employeeDTO).subscribe();
    setTimeout(() => {
        this.router.navigate(['/']);
      },
      200);
  }

  constructor(
    private employeeService: EmployeeService,
    private skillService: SkillsService,
    private maritalStatusService: MaritalStatusService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private roleService: RoleService) {
  }

  ngOnInit(): void {

    this.uuid = this.route.snapshot.paramMap.get('uuid');

    this.employeeService.getByUUID(this.uuid).subscribe(employeeDTO => {
      this.employeeDTO = employeeDTO;
      this.currentUsername = employeeDTO.username;
    });

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

  disableInput() {
    this.changeUsername = !this.changeUsername;
  }
}

import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {EmployeeService} from '../../service/EmployeeService';
import {ApiService} from '../../core/api.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  oldPasswordModel;

  isPasswordCorrect = false;

  newPasswordModel;
  newPasswordConfirmModel;


  username;
  employee;

  constructor(private location: Location,
              private route: ActivatedRoute,
              private router: Router,
              private employeeService: EmployeeService,
              private apiService: ApiService,
              private translate: TranslateService) {
  }

  ngOnInit() {

    const uuid = this.route.snapshot.paramMap.get('uuid');

    this.employeeService.getByUUID(uuid).subscribe(e => this.username = e.username);

    this.employeeService.getByUUID(uuid).subscribe(e => this.employee = e);

  }

  goBack(): void {
    this.location.back();
  }

  checkPassword() {

    let msg = '';
    this.translate.get('changePassword.wrongPassword').subscribe(t => msg = t);

    const loginPayload = {
      username: this.username,
      password: this.oldPasswordModel
    };

    this.apiService.login(loginPayload).subscribe(data => {
      this.isPasswordCorrect = true;
    }, error => {
      alert(msg);
      this.isPasswordCorrect = false;
    });
  }

  changePassword() {
    const payload = {
      username: this.username,
      password: this.newPasswordModel
    };

    this.employeeService.changePassword(payload).subscribe(status => {

      let msg = '';
      this.translate.get('changePassword.ok').subscribe(t => msg = t);

      if (status === 'OK') {
        alert(msg);
        this.router.navigate(['index']);
      } else {
        console.log(status);
      }
    });
  }

}

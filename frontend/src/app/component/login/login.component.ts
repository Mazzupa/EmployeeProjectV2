import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiService} from '../../core/api.service';
import {TranslateService} from '@ngx-translate/core';
import {JwtHelperService} from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  invalidLogin = false;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private apiService: ApiService,
              private translate: TranslateService,
              private jwtHelper: JwtHelperService) {
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    const loginPayload = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value
    };
    this.apiService.login(loginPayload).subscribe(data => {
      window.localStorage.setItem('refresh', data.refresh);
      window.localStorage.setItem('access', data.access);
      window.localStorage.setItem('uuid', this.jwtHelper.decodeToken(data.access).user_id);
      this.router.navigate(['index']);

    }, err => {
      this.invalidLogin = true;

      let msg = '';
      this.translate.get('login.error').subscribe(t => msg = t);

      alert(msg);
    });
  }

  ngOnInit() {
    window.localStorage.removeItem('refresh');
    window.localStorage.removeItem('access');
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
  }
}

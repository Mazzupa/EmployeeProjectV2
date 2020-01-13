import {Component, OnInit} from '@angular/core';
import {EmployeeService} from './service/EmployeeService';
import {Event, NavigationStart, Router} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';
import {TranslateService} from '@ngx-translate/core';
import {ApiService} from './core/api.service';
import {RefreshToken} from './model/RefreshToken';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  employee;

  constructor(private employeeService: EmployeeService,
              private router: Router,
              public jwtHelper: JwtHelperService,
              translate: TranslateService,
              apiService: ApiService) {

    const lang = window.localStorage.getItem('lang');

    if (!lang) {
      translate.use('en');
    } else {
      translate.use(lang);
    }

    router.events.subscribe((event: Event) => {

        if (router.getCurrentNavigation().extractedUrl.toString() !== '/login') {
          if (event instanceof NavigationStart) {
            if (!window.localStorage.getItem('access')) {
              this.router.navigate(['login']);
              return;
            }

            if (this.jwtHelper.isTokenExpired(window.localStorage.getItem('access'))) {
              if (this.jwtHelper.isTokenExpired(window.localStorage.getItem('refresh'))) {
                translate.get('messages.expired').subscribe(t => {
                  alert(t);
                });
                this.router.navigate(['login']);
                return;
              }
              console.log('token scaduto uso il refresh per ottenerne un altro ciao grazie');
              const refreshToken = new RefreshToken();
              refreshToken.refresh = window.localStorage.getItem('refresh');
              apiService.refresh(refreshToken).subscribe(token => {
                window.localStorage.setItem('access', token.access);
                location.reload();
              });
            }
          }
        }
      }
    );
  }

  ngOnInit(): void {
    this.employeeService.getByUUID(window.localStorage.getItem('uuid')).subscribe(user => this.employee = user);
  }
}

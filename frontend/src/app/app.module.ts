import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TableComponent} from './component/table/table.component';

import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EmployeeService} from './service/EmployeeService';
import {SkillsService} from './service/SkillsService';
import {MaritalStatusService} from './service/MaritalStatusService';
import {FormComponent} from './component/form/form.component';
import {AppRoutingModule} from './app-routing.module';
import {FilterPipe} from './component/table/filter.pipe';
import {LoginComponent} from './component/login/login.component';
import {ApiService} from './core/api.service';
import {TokenInterceptor} from './core/interceptor';
import { ChangePasswordComponent } from './component/change-password/change-password.component';
import { EditFormComponent } from './component/edit-form/edit-form.component';
import {RoleService} from './service/RoleService';
import { EmployeeComponent } from './component/employee/employee.component';
import { UsernameCheckerComponent } from './component/username-checker/username-checker.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { LanguageSelectorComponent } from './component/language-selector/language-selector.component';
import { PasswordCheckerComponent } from './component/password-checker/password-checker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {JwtModule} from '@auth0/angular-jwt';
import {NgxPaginationModule} from 'ngx-pagination';

export function tokenGetter() {
  return localStorage.getItem('token');
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    FormComponent,
    FilterPipe,
    LoginComponent,
    ChangePasswordComponent,
    EditFormComponent,
    EmployeeComponent,
    UsernameCheckerComponent,
    NavBarComponent,
    LanguageSelectorComponent,
    PasswordCheckerComponent,
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter
      }
    }),
    BrowserAnimationsModule
  ],
  exports: [
    TranslateModule
  ],
  providers: [ApiService, EmployeeService, MaritalStatusService, SkillsService, RoleService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
}

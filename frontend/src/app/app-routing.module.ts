import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeComponent} from './component/employee/employee.component';
import {FormComponent} from './component/form/form.component';
import {EditFormComponent} from './component/edit-form/edit-form.component';
import {LoginComponent} from './component/login/login.component';
import {ChangePasswordComponent} from './component/change-password/change-password.component';


const routes: Routes = [
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: 'index', component: EmployeeComponent},
  {path: 'form', component: FormComponent},
  {path: 'editForm/:uuid', component: EditFormComponent},
  {path: 'login', component: LoginComponent},
  {path: 'changePassword/:uuid', component: ChangePasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

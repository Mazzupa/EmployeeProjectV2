import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from '../model/Employee';
import {Actions, URLS} from '../data/URLS';
import {EmployeeDTO} from '../model/EmployeeDTO';
import {GenericService} from './GenericService';

@Injectable()
export class EmployeeService implements GenericService {

  constructor(private http: HttpClient) {
  }

  save(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(URLS[Actions.SAVE].url, employee);
  }

  edit(employeeDTO: EmployeeDTO): Observable<EmployeeDTO> {
    return this.http.put<EmployeeDTO>(URLS[Actions.EDIT].url, employeeDTO);
  }

  delete(uuid: string): Observable<boolean> {
    const url = `${URLS[Actions.DELETE].url}/${uuid}`;
    return this.http.delete<boolean>(url);
  }

  getByUUID(uuid: string): Observable<EmployeeDTO> {
    const url = `${URLS[Actions.GET_EMPLOYEE_BY_UUID].url}/${uuid}`;
    return this.http.get<EmployeeDTO>(url);
  }

  find(query: string): Observable<EmployeeDTO[]> {
    // const url = URLS[Actions.GET_EMPLOYEE].url + '/' + query;
    const url = URLS[Actions.GET_EMPLOYEE].url;
    return this.http.get<EmployeeDTO[]>(url);
  }

  userExist(username: string): Observable<boolean> {
    const url = URLS[Actions.USER_EXIST].url + '/' + username + '/';
    return this.http.get<boolean>(url);
  }

  changePassword(payload): Observable<any> {
    return this.http.post<any>(URLS[Actions.CHANGE_PASSWORD].url, payload);
  }
}

import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Actions, URLS} from "../data/URLS";
import {Role} from '../model/Role';

@Injectable()
export class RoleService {

  constructor(private http: HttpClient) {
  }

  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(URLS[Actions.GET_ROLES].url);
  }
}

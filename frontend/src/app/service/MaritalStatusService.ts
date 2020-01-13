import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Actions, URLS} from "../data/URLS";
import {MaritalStatus} from "../model/MaritalStatus";

@Injectable()
export class MaritalStatusService {

  constructor(private http: HttpClient) {
  }

  getMaritalStatus(): Observable<MaritalStatus[]> {
    return this.http.get<MaritalStatus[]>(URLS[Actions.GET_MARITAL_STATUSES].url);
  }
}

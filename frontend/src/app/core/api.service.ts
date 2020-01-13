import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiResponse} from '../model/api.response';
import {Observable} from 'rxjs';
import {Token} from '../model/Token';
import {RefreshToken} from '../model/RefreshToken';
import {AccessToken} from '../model/AccessToken';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {
  }

  login(loginPayload): Observable<Token> {
    return this.http.post<Token>('http://localhost:8000/' + 'api/token/', loginPayload);
  }

  refresh(loginPayload: RefreshToken): Observable<AccessToken> {
    return this.http.post<AccessToken>('http://localhost:8000/' + 'api/token/refresh/', loginPayload);
  }
}

import {Skill} from "../model/Skill";
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Actions, URLS} from "../data/URLS";

@Injectable()
export class SkillsService {

  constructor(private http: HttpClient) {
  }

  getSkill(): Observable<Skill[]> {
    return this.http.get<Skill[]>(URLS[Actions.GET_SKILLS].url);
  }
}

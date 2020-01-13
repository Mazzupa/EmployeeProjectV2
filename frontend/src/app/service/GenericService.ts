import {Observable} from 'rxjs';

export interface GenericService {

  save(entity: any): Observable<any>;

  edit(entityDTO: any): Observable<any>;

  delete(uuid: any): Observable<any>;

  getByUUID(uuid: any): Observable<any>;

  find(query: any): Observable<any[]>;

}

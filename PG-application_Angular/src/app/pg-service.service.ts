import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {PG} from './pg';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class PgServiceService {
  
  constructor(private http: HttpClient) { }

  private pgUrl = '/pg'

  public getPg(){
    return this.http.get<PG[]>(this.pgUrl);
  }

  public deletePg(pg){
    return this.http.delete<PG>(this.pgUrl + '/' + pg.id);
  }

  public createPg(pg){
    return this.http.put<PG>(this.pgUrl,pg);
  }
}

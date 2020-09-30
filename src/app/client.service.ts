import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {IAdress} from './model/IAdress';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAddress(): Observable<IAdress>{
    return this.http
      .get<IAdress>('http://localhost:8080/ajax/test93').pipe();
  }
}

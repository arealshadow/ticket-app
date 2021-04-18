import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {TicketInfo} from './ticket-data/TicketInfo';
import  {environment} from '../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class TicketInfoService {
  private url = environment.apiUrl ;

  constructor(private http: HttpClient) { }
  getTicketApi(): Observable<TicketInfo> {
    var urlAllTickets= this.url + "app.json";
    return this.http.get<TicketInfo>(urlAllTickets);
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from 'src/event';

@Injectable({
  providedIn: 'root'
})
export class ScrapService {
  private tracksUrl = 'http://localhost:8081/api/events/data';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor( private http: HttpClient ) { }

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.tracksUrl);
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Track } from 'src/track';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private tracksUrl = 'http://localhost:8081/api/tracks';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor( private http: HttpClient ) { }

  getSavedTracks(): Observable<Track[]> {
    return this.http.get<Track[]>(this.tracksUrl);
  }

  save(track: Track): void {
    this.http.post<Track>(this.tracksUrl, track, this.httpOptions);
  }

  remove(track: Track): void {
    this.http.delete<Track>(this.tracksUrl+"/"+track.id, this.httpOptions);
  }
}

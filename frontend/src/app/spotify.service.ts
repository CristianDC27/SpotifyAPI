import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from 'src/album';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private spotifyUrl = 'https://api.spotify.com/v1/';
  httpOptions = {
    headers: new HttpHeaders(
      {
        // https://accounts.spotify.com/authorize?response_type=token&client_id={CLIENT_ID}&redirect_uri=http://localhost:4200/home
        'Authorization': 'Bearer BQB2hWLvKldZ3EFGK3sGM0511W2L7O0PUIKN0Q4Te-KGezRofS6lR09F5vPXVtJrGjtawri-Uh1eZIAtLTYB5PV13R-PPaozwmdQYsJXx6eV-EBR43-7LuV9gpCtBzUH9o6sIkc34okY',
        'Content-Type': 'application/json'
      })
  };
  constructor(private http: HttpClient) { }

  getAlbums(limit: 10): Observable<String> {
    // Testing here
    return this.http.get<String>(this.spotifyUrl +"browse/new-releases?limit="+limit, this.httpOptions);
  }
}

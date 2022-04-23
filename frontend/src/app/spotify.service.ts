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
        'Authorization': 'Bearer BQC9C_1rqdk81ypd49Pu5UVF0IzLthVZ-kdyJcGBnmFm8X6NQkN1htutaZIXEKc9RVLIQMqiIPkTOXiaZze4u3bP7GC5IAHMGw7bnudWaq3eRGOmPwwwDYw_wK3GE-1tm9txU3HHv35B',
        'Content-Type': 'application/json'
      })
  };
  constructor(private http: HttpClient) { }

  getAlbums(limit: 10): Observable<String> {
    // Testing here
    return this.http.get<String>(this.spotifyUrl +"browse/new-releases?limit="+limit, this.httpOptions);
  }
}

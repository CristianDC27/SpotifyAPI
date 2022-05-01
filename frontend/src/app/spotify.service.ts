import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Track } from 'src/track';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private spotifyUrl = 'https://api.spotify.com/v1/';
  httpOptions = {
    headers: new HttpHeaders(
      {
        // https://accounts.spotify.com/authorize?response_type=token&client_id={CLIENT_ID}&redirect_uri=http://localhost:4200/home
        'Authorization': 'Bearer BQCcjri2do_jw_QZlD2cjyE8ZRSOUSpoDPPNFwHMBkyWO-MaZf08gcOJbNJvOcxFOzDU1zeAGrBC39CQROOIszewS0yDWhcDJCaVPK2lVHNHFm7d9HOJv98Nw1wXdqRg5zYP78AAj5IH',
        'Content-Type': 'application/json'
      })
  };
  constructor(private http: HttpClient) { }

  getAlbums(limit: 10): Observable<String> {
    return this.http.get<String>(this.spotifyUrl + "browse/new-releases?limit="+limit, this.httpOptions);
  }

  getAlbum(id: String): Observable<String> {
    return this.http.get<String>(this.spotifyUrl + "albums/" + id, this.httpOptions);
  }

  getTrack(id: String): Observable<Track> {
    return this.http.get<Track>(this.spotifyUrl + "tracks/" + id, this.httpOptions);
  }
}

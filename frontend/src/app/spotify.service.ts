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
        // https://accounts.spotify.com/authorize?response_type=token&client_id={CLIENT_ID}&redirect_uri=localhost:4200
        'Authorization': 'Bearer BQBSBTHGyYNTDN4uBgvtRshaOigsrrVGU_raIjKBzV_G_p4N0ER5Z0wPfUksqi3dV0YpUFFqzkzXkwolslIDvlMJmgybQZV-I3AUnXcsKOPCii7eDifXo0GwCE8GmCctJ-R-dmz1Umhh',
        'Content-Type': 'application/json'
      })
  };
  constructor(private http: HttpClient) { }

  getAlbums(limit: 10): Observable<Album[]> {
    // Testing here
    return this.http.get<Album[]>(this.spotifyUrl +"browse/new-realeases/limit="+limit, this.httpOptions);
  }
}

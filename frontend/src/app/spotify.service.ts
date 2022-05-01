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
        'Authorization': 'Bearer BQAR4RdxLxZnogSOKG4gd9qR1bxCt_7H17FfeCCQuV0tOQxXHgOo-Ibz4n9uWqOzqLDDE0O_GgOGpfwXHMBOk5BzyQSxKPB4jzzliw49HVv_d-1j-KMcKBUUAedOiIIFgx5DF_LivC0z',
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
}

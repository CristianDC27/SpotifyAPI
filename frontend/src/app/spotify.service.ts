import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Artist } from 'src/artist';
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
        'Authorization': 'Bearer BQDoKktHjKXFO4evRDvs_cNajR8JEvJtYC58-tAzENGG0paGgBapcx6GoOF3zuLfTfYQH9zPUVSyz9ILmOJ3vPWJJXaoMTWdR_jnRojpDu0j_2D7_7ywMPuqYRsVIYedEKJneweI0TtR',
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

  getArtists(limit: 10): Observable<String> {
    return this.http.get<String>(this.spotifyUrl + "search?q=artists&type=artist&limit="+limit, this.httpOptions);
  }
  getArtist(id: String): Observable<Artist> {
    return this.http.get<Artist>(this.spotifyUrl + "artists/" + id, this.httpOptions);
  }

  getArtistTracks(id: String): Observable<String> {
    return this.http.get<String>(this.spotifyUrl + "artists/" + id + "/top-tracks?market=ES", this.httpOptions);
  }
}

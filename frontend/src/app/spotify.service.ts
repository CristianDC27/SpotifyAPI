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
        'Authorization': 'Bearer BQCBQBD_jqYKAJLDFZSW1sNn1RYSsqHFhe4cPxea-2B3hM1C5pyioIm659DiLeb09fyDRxAYLdREOMTDbr_42VL_mUdW4_HsWLXkeSFa6oLT1mb7p38kTJJDD7EprignZEUjo2xm7uat',
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

  getTracks(ids: String): Observable<String> {
    return this.http.get<String>(this.spotifyUrl + "tracks?ids=" + ids, this.httpOptions);
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

  getShows(limit: 10): Observable<String> {
    return this.http.get<String>(this.spotifyUrl + "search?q=shows&type=show&limit="+limit, this.httpOptions);
  }

  getShowEpisodes(id: String): Observable<String> {
    return this.http.get<String>(this.spotifyUrl + "shows/" + id, this.httpOptions);
  }
}

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
        'Authorization': 'Bearer BQAf3PePO7sO8N8sG192mtguQuKl9GD6GDK1twZzm-dRo0SZ79PsNUYZ-rQVo6LKSOWQWH4h2XqH4WwdWrIDRAFx6VML9N6EzQ3Qy1AYhMY50JuEbpG6etHyXiCxATvxVFJ2cx00cDf9',
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

  getSearch(limit: 10, value: String): Observable<String> {
    return this.http.get<String>(this.spotifyUrl + "search?q="+value+"&type=track%2Cartist%2Calbum%2Cshow&market=ES&limit="+limit+"&offset=5", this.httpOptions);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  private token = 'BQAie73vZ2r19MfJkK5M7OyrW1-_U18kSoHaCvpR75XCEzVflWY0neIsx-V3WOHwlQ3ylWyL3Dow7JQS7DQ';
  public artistas: any[] = [];

  constructor(public http: HttpClient) {
    console.log('Servicio de Spotify');
   }

   getArtistas(termino: string){
      const URL = `https://api.spotify.com/v1/search?query=${ termino }&type=artist&market=ES&limit=20`;
      const HEADERS = new HttpHeaders({
        'authorization' : `Bearer ${this.token}`
      });

      return this.http.get(URL, { headers: HEADERS })
          .map( (resp: any) => {
              this.artistas = resp.artists.items;

              return this.artistas;
          });
   }
}

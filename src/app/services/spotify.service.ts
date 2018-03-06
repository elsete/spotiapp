import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { headersToString } from 'selenium-webdriver/http';

@Injectable()
export class SpotifyService {

    /* POSTMAN generar TOKEN

    POST: https://accounts.spotify.com/api/token

    //x-www-form-urlencoded
    [{"key":"grant_type","value":"client_credentials","description":"","type":"text","enabled":true},{"key":"client_id","value":"41b7768b24384bdcb47c627d428128f1","description":"","type":"text","enabled":true},{"key":"client_secret","value":"de9d61cf19e8469f85942798b8c9d84c","description":"","type":"text","enabled":true}]

    */


  private token = 'BQCtAOkSEEIukkfOxOmqTTedpuZo4WeBgvt5u6uUnSor7g3XvioinKHGdHRVDxV9-WwSjx6LvRmO_5-G5sw';
  private urlSpotify = 'https://api.spotify.com/v1/';
  public artistas: any[] = [];

  constructor(public http: HttpClient) {
    console.log('Servicio de Spotify');
   }

   private getHeaders(): HttpHeaders {
    const HEADERS = new HttpHeaders({
      'authorization' : `Bearer ${this.token}`
    });

    return HEADERS;
   }

   getArtista(id: string) {
     const URL = `${ this.urlSpotify }artists/${ id }`;

     return this.http.get(URL, { headers: this.getHeaders() });
   }

   getArtistas(termino: string){
      const URL = `${ this.urlSpotify }search?query=${ termino }&type=artist&market=ES&limit=20`;

      return this.http.get(URL, { headers: this.getHeaders() })
          .map( (resp: any) => {
              this.artistas = resp.artists.items;

              return this.artistas;
          });
   }

   getTop(id: string){
    const URL = `${ this.urlSpotify }artists/${ id }/top-tracks?country=US`;

     return this.http.get(URL, { headers: this.getHeaders() });
   }
}

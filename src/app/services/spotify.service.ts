import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

    /* POSTMAN generar TOKEN

    POST: https://accounts.spotify.com/api/token

    //x-www-form-urlencoded
    [{"key":"grant_type","value":"client_credentials","description":"","type":"text","enabled":true},{"key":"client_id","value":"41b7768b24384bdcb47c627d428128f1","description":"","type":"text","enabled":true},{"key":"client_secret","value":"de9d61cf19e8469f85942798b8c9d84c","description":"","type":"text","enabled":true}]

    */


  private token = 'BQCsSUltI1Tmcp7NEJ0rYBh3kJJpV7QJFyY1G9w0e1IynBI7qxUc6rs-qJd15VBGM3qzTxS_gpu0sI07a3c';
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

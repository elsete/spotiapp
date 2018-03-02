import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})

export class SearchComponent {

  public termino: string = '';
  public minLength: number = 2;

  constructor(public _spotify: SpotifyService) {  }

  buscarArtista() {
    if (this.termino.length >= this.minLength) {
      this._spotify.getArtistas(this.termino)
        .subscribe(artistas => {
          console.log(artistas);
        });
    }
  }
}

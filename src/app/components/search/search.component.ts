import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})

export class SearchComponent implements OnInit {

  public termino: string = '';
  public minLength: number = 2;

  constructor(private activatedRoute: ActivatedRoute,
              public _spotify: SpotifyService) {  }

  ngOnInit(): void {
    this.activatedRoute.params
    .map(params => params['termino'])
          .subscribe(termino => {
              this.termino = termino;
              this.buscarArtista();
          });
  }

  buscarArtista() {
    if (this.termino.length >= this.minLength) {
      this._spotify.getArtistas(this.termino).subscribe();
    }
  }
}

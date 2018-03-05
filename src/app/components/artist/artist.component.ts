import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})

export class ArtistComponent implements OnInit {

  termino: string;
  artista: any = {};
  canciones: any[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              public _spotify: SpotifyService) { }

  ngOnInit() {

    this.activatedRoute.params
          .subscribe(params => {
            const id: string = params['id'];
            this.termino = params['termino'];

            this._spotify.getArtista(id).subscribe(artista => {
              console.log(artista);
              this.artista = artista;
            });

            this._spotify.getTop(id)
            .map((resp: any) => resp.tracks)
            .subscribe(tracks => {
              this.canciones = tracks;
              console.log(this.canciones);
            });
          });
  }

}

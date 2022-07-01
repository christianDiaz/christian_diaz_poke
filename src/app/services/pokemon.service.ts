import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { END_POINTS, URL } from '../static/constants';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private URL_SERVICE = `${URL.pokeApiV2}${END_POINTS.pokemon}`;

  constructor(private httpClient: HttpClient) {}

  getPokemon(pokemon: String): Observable<any> {
    return this.httpClient.get<HttpResponse<any>>(this.URL_SERVICE + pokemon, {
      observe: 'response',
    });


  }
}

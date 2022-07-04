import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { END_POINTS, URL } from '../static/constants';
import { Pokemon } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private URL_SERVICE = `${URL.pokeApiV2}${END_POINTS.pokemon}`;

  constructor(private httpClient: HttpClient) {}

  getPokemon(pokemon: string): Observable<HttpResponse<any>> {
    return this.httpClient.get<HttpResponse<any>>(
      `${this.URL_SERVICE}/${pokemon}`,
      {
        observe: 'response',
      }
    );
  }

  getPokemonData(urlPokemon: string): Observable<HttpResponse<any>> {
    return this.httpClient.get<HttpResponse<any>>(`${urlPokemon}`, {
      observe: 'response',
    });
  }

  getPokemonPaged(
    offset: number,
    limit: number
  ): Observable<HttpResponse<any>> {
    return this.httpClient.get<HttpResponse<Pokemon>>(
      `${this.URL_SERVICE}?limit=${limit}&offset=${offset}`,
      {
        observe: 'response',
      }
    );
  }
}

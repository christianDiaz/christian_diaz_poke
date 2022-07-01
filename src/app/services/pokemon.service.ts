import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { END_POINTS, URL } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private URL_SERVICE = `${URL.pokeApiV2}/${END_POINTS.pokemon}/`;

  constructor(private httpClient: HttpClient) {}

  getPokemon(pokemon: String): Observable<any> {
    // return this.http.get<HttpResponse<any>>(this.URL_SERVICE + pokemon, {
    //   observe: 'response',
    // });

    return this.httpClient.request('GET', `${this.URL_SERVICE + pokemon}`, {
      responseType: 'json',
      observe: 'response',
    });
  }
}

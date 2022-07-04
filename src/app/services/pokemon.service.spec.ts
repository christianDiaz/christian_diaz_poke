import { getTestBed, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { PokemonService } from './pokemon.service';
import { first } from 'rxjs';

describe(`Pokemon Service Test Suite `, () => {
  let injector: TestBed;
  let service: PokemonService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [],
    });
    injector = getTestBed();
    service = injector.inject(PokemonService);
  });

  describe(`Services`, () => {
    it(`getPokemonData should return pokemon Data`, () => {
      const expectedResult = {};
      const urlPokemon = '';

      service
        .getPokemonData(urlPokemon)
        .pipe(first())
        .subscribe((data) => {
          expect(data.body).toEqual(expectedResult);
        });
    });

    it(`getPokemon should return pokemonData`, () => {
      const pokemonData: string = '5';
      service
        .getPokemon(pokemonData)
        .pipe(first())
        .subscribe((data) => {
          expect(data.body).toEqual({});
        });
    });

    it(`getPokemonPaged shud return pokemonData`, () => {
      const pokemonOffset = 0;
      const pokemonLimit = 4;

      service
        .getPokemonPaged(pokemonOffset, pokemonLimit)
        .pipe(first())
        .subscribe((data) => {
          expect(data.body).toEqual({});
        });
    });
  });
});

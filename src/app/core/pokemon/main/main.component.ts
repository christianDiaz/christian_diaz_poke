import { PokemonService } from './../../../services/pokemon.service';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { toPokemon } from '../../../interfaces/pokemon';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent {
  searchValue: string = '';
  _serviceSubscription!: Subscription;
  chosenPokemon?: Pokemon;
  pokemonOffset: number = 0;
  pokemonLimit: number = 4;
  pokemonList: any[] = [];
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemonList();
  }

  onKeyUpSearch() {
    if (this.searchValue.trim().length === 0) {
      this.getPokemonList();
    } else {
      this.getPokemon(this.searchValue);
    }
  }

  onClickNextPage() {
    this.pokemonOffset = this.pokemonOffset + 4;
    this.getPokemonList();
  }

  onClickPrevPage() {
    this.pokemonOffset = this.pokemonOffset <= 4 ? 0 : this.pokemonOffset - 4;
    this.getPokemonList();
  }

  getPokemon(pokemonName: string) {
    this._serviceSubscription = this.pokemonService
      .getPokemon(pokemonName)
      .subscribe({
        next: (r) => (this.chosenPokemon = toPokemon(r.body)),
        error: (e) => (this.chosenPokemon = undefined),
        complete: console.info,
      });
  }

  getPokemonList() {
    this._serviceSubscription = this.pokemonService
      .getPokemonPaged(this.pokemonOffset, this.pokemonLimit)
      .subscribe({
        next: (r) => {
          this.pokemonList = r.body.results;
        },
        error: (e) => console.error(e),
      });
  }

  public selectedPokemon(selectedPokemon: Pokemon) {
    this.chosenPokemon = selectedPokemon;
  }

  ngOnDestroy(): void {
    this._serviceSubscription && this._serviceSubscription.unsubscribe();
  }
}

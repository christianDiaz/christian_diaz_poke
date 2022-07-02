import { PokemonService } from './../../../services/pokemon.service';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent {
  searchValue: String = '';
  _serviceSubscription!: Subscription;
  pokemonOffset: number = 0;
  pokemonLimit: number = 4;
  pokemonList: Array<any> = [];
  constructor(private pokemonService: PokemonService) {
    this.getPokemonList();
  }

  onKeyUpSearch() {
    this.getPokemon(this.searchValue);
  }

  onClickNextPage() {
    this.pokemonOffset = this.pokemonOffset + 4;
    this.getPokemonList();
  }

  onClickPrevPage() {
    this.pokemonOffset = this.pokemonOffset <= 4 ? 0 : this.pokemonOffset - 4;
    this.getPokemonList();
  }

  getPokemon(pokemonName: String) {
    this._serviceSubscription = this.pokemonService
      .getPokemon(pokemonName)
      .subscribe({
        next: (r) => console.log(r.body.results),
        error: (e) => console.log,
        complete: console.info,
      });
  }

  getPokemonList() {
    this._serviceSubscription = this.pokemonService
      .getPokemonPaged(this.pokemonOffset, this.pokemonLimit)
      .subscribe({
        next: (r) => (this.pokemonList = r.body.results),
        error: (e) => console.error(e),
      });
  }

  getRandomColor() {
    let color = '#';
    let letters = '0123456789ABCDEF';
    color = '#'; // <-----------
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  ngOnDestroy(): void {
    this._serviceSubscription && this._serviceSubscription.unsubscribe();
  }
}

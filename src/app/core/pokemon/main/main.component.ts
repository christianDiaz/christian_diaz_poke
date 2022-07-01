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
  constructor(private pokemonService: PokemonService) {
    console.log(this.pokemonOffset);

  }

  onKeyUp() {
    this.getPokemon();
  }

  onClickNextPage() {
    this.pokemonOffset = this.pokemonOffset + 4;
    console.log(this.pokemonOffset);

  }

  onClickPrevPage() {
    this.pokemonOffset = this.pokemonOffset <= 4 ? 0 : this.pokemonOffset - 4;
    console.log(this.pokemonOffset);
  }

  getPokemon() {
    this._serviceSubscription = this.pokemonService
      .getPokemon('pikachu')
      .subscribe({
        next: (r) => console.log(r.body),
        error: (e) => console.log,
        complete: console.info,
      });
  }

  ngOnDestroy(): void {
    this._serviceSubscription && this._serviceSubscription.unsubscribe();
  }
}

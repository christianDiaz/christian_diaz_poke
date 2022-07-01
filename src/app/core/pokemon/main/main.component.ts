import { PokemonService } from './../../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {
  searchValue: String = '';

  constructor(
    private pokemonService: PokemonService,
    private _serviceSubscription: Subscription
  ) {}

  ngOnInit(): void {}

  getPokemon() {
    this._serviceSubscription = this.pokemonService
      .getPokemon('asdsa')
      .subscribe({
        next: (v) => console.log,
        error: (e) => console.log,
        complete: console.info,
      });
  }

  ngOnDestroy(): void {
    this._serviceSubscription && this._serviceSubscription.unsubscribe();
  }
}

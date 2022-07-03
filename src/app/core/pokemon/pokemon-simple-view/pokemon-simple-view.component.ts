import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PokemonService } from '../../../services/pokemon.service';
import { Subscription } from 'rxjs';
import { toPokemon } from '../../../interfaces/pokemon';
import { Pokemon } from 'src/app/interfaces/pokemon';

@Component({
  selector: 'app-pokemon-simple-view',
  templateUrl: './pokemon-simple-view.component.html',
  styleUrls: ['./pokemon-simple-view.component.css'],
})
export class PokemonSimpleViewComponent implements OnInit {
  @Input() pokemonUrl: string = '';

  @Output() selectedPokemon = new EventEmitter<any>();

  _serviceSubscription!: Subscription;
  backgroundColor: String = '';
  pokemon!: Pokemon;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.backgroundColor = this.getRandomColor();
    this._serviceSubscription = this.pokemonService
      .getPokemonData(this.pokemonUrl)
      .subscribe({
        next: (r) => (this.pokemon = toPokemon(r.body)),
        error: (e) => console.log,
        complete: console.info,
      });
  }

  onClickPokemonCard(pokemon: Pokemon) {
    this.selectedPokemon.emit(pokemon);
  }

  getRandomColor(color: string = '#', letters: string = '0123456789ABCDEF') {
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 7)];
    }
    return color;
  }

  ngOnDestroy(): void {
    this._serviceSubscription && this._serviceSubscription.unsubscribe();
  }
}

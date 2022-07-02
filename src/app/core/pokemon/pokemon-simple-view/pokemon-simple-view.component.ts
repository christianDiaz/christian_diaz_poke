import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PokemonService } from '../../../services/pokemon.service';
import { Subscription } from 'rxjs';
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
        next: (r) => (this.pokemon = this.toPokemon(r.body)),
        error: (e) => console.log,
        complete: console.info,
      });
  }

  toPokemon(pokemonData: any): Pokemon {
    return {
      id: pokemonData.id,
      name: pokemonData.name,
      moves: this.populateMoves(pokemonData.moves),
      sprites: this.populateSprites(pokemonData.sprites),
      pokemonTypes: this.populateTypes(pokemonData.types),
      weight: pokemonData.weight,
      photo: pokemonData.sprites.other.home.front_default,
    };
  }

  populateSprites(sprites: any): string[] {
    let spritesData: string[] = [];
    sprites.back_default !== null && spritesData.push(sprites.back_default);
    sprites.back_female !== null && spritesData.push(sprites.back_female);
    sprites.back_shiny !== null && spritesData.push(sprites.back_shiny);
    sprites.back_shiny_female !== null &&
      spritesData.push(sprites.back_shiny_female);
    sprites.front_default !== null && spritesData.push(sprites.front_default);
    sprites.front_female !== null && spritesData.push(sprites.front_female);
    sprites.front_shiny !== null && spritesData.push(sprites.front_shiny);
    sprites.front_shiny_female !== null &&
      spritesData.push(sprites.front_shiny_female);
    return spritesData;
  }

  populateMoves(moves: Array<any>) {
    return moves.map((m) => m.move.name);
  }

  populateTypes(types: Array<any>) {
    return types.map((t) => t.type.name);
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

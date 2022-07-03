import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Pokemon, toPokemon } from '../../../interfaces/pokemon';

@Component({
  selector: 'app-pokemon-detail-view',
  templateUrl: './pokemon-detail-view.component.html',
  styleUrls: ['./pokemon-detail-view.component.css'],
})
export class PokemonDetailViewComponent implements OnInit {
  @Input() selectedPokemon!: Pokemon;
  pokemon!: Pokemon;

  constructor() {}

  ngOnInit(): void {
    this.pokemon = this.selectedPokemon;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.pokemon = changes['selectedPokemon'].currentValue;
  }
}

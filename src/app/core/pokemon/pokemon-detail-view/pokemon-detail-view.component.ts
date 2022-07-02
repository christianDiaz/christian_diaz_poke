import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../../interfaces/pokemon';

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
    console.log(this.selectedPokemon);
    this.pokemon = this.selectedPokemon;
  }
}

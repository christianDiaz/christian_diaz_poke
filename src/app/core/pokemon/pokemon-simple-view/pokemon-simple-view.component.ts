import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-simple-view',
  templateUrl: './pokemon-simple-view.component.html',
  styleUrls: ['./pokemon-simple-view.component.css'],
})
export class PokemonSimpleViewComponent implements OnInit {
  @Input()
  url: string = '';

  constructor() {}

  ngOnInit(): void {}
}

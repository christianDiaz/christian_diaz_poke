import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { MainComponent } from './main/main.component';
import { PokemonSimpleViewComponent } from './pokemon-simple-view/pokemon-simple-view.component';




@NgModule({
  declarations: [
    MainComponent,
    PokemonSimpleViewComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    FormsModule
  ]
})
export class PokemonModule { }

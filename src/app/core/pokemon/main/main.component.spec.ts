import { PokemonDetailViewComponent } from './../pokemon-detail-view/pokemon-detail-view.component';
import { MainComponent } from './main.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonService } from '../../../services/pokemon.service';
import { HttpClientModule, HttpResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import castedPokemonData from '../../../mocks/data/pokemon.json';
import { Pokemon } from '../../../interfaces/pokemon';

describe(`Main Component Test Suite `, () => {
  let fixture: ComponentFixture<MainComponent>;
  let component: MainComponent;
  let service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainComponent,PokemonDetailViewComponent],
      providers: [PokemonService],
      imports: [HttpClientModule, FormsModule],
    });
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.debugElement.componentInstance;
    service = TestBed.inject(PokemonService);
  });

  describe(`Set Up Component`, () => {
    it(`should create an app`, () => {
      component.ngOnInit();
      expect(component).toBeTruthy();
    });

    it(`validate pokemonOffset OnClickNextPage`, () => {
      component.pokemonOffset = 0;
      component.pokemonLimit = 4;
      component.onClickNextPage();
      fixture.detectChanges();
      expect(component.pokemonOffset).toBe(4);
      expect(component.pokemonLimit).toBe(4);
    });

    it(`validate pokemonOffset=0 OnClickprevPage:result=0`, () => {
      component.pokemonOffset = 4;
      component.pokemonLimit = 4;
      component.onClickPrevPage();
      fixture.detectChanges();
      expect(component.pokemonLimit).toBe(4);
      expect(component.pokemonOffset).toBe(0);
    });

    it(`validate pokemonOffset=8 OnClickprevPage: result=0`, () => {
      component.pokemonOffset = 8;
      component.pokemonLimit = 4;
      component.onClickPrevPage();
      fixture.detectChanges();
      expect(component.pokemonLimit).toBe(4);
      expect(component.pokemonOffset).toBe(4);
    });

    it(`validate searchValue OnKeyUpSearch: searchValue is empty`, () => {
      component.searchValue = '';
      component.onKeyUpSearch();
      fixture.detectChanges();
      expect(component.pokemonList.length).toBeGreaterThanOrEqual(0);
    });

    it(`validate searchValue OnKeyUpSearch: searchValue is not empty`, () => {
      const data = jest.spyOn(service, 'getPokemon');
      component.searchValue = 'greninja';
      component.onKeyUpSearch();
      fixture.detectChanges();
      expect(data).toHaveBeenCalled();
    });

    it(`validate selectedPokemon function`, () => {
      const selectedPokemon: Pokemon = castedPokemonData;
      component.selectedPokemon(selectedPokemon);
      fixture.detectChanges();
      expect(selectedPokemon).toEqual(component.chosenPokemon);
    });
  });

  describe(`test Services`, () => {
    it(`validate `, () => {});
  });
});

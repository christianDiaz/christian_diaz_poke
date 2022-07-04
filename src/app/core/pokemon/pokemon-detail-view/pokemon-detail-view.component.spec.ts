import { waitForAsync, TestBed, ComponentFixture } from '@angular/core/testing';
import { PokemonService } from '../../../services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';
import { PokemonDetailViewComponent } from './pokemon-detail-view.component';
import { Pokemon, toPokemon } from '../../../interfaces/pokemon';
import castedPokemonData from '../../../mocks/data/pokemon.json';
import pokemonData from '../../../mocks/data/pokemonData.json';

describe(`Pokemon Detail Component Test Suite `, () => {
  let fixture: ComponentFixture<PokemonDetailViewComponent>;
  let component: PokemonDetailViewComponent;
  let service: PokemonService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonDetailViewComponent],
      providers: [PokemonService],
      imports: [HttpClientModule],
    }).compileComponents();
    fixture = TestBed.createComponent(PokemonDetailViewComponent);
    component = fixture.debugElement.componentInstance;
    service = TestBed.inject(PokemonService);
  }));

  describe(`funcitons`, () => {
    it(`should create the app`, () => {
      const expectedPokemon: Pokemon = castedPokemonData;
      const castedPokemon: Pokemon = toPokemon(pokemonData);
      expect(castedPokemon).toEqual(expectedPokemon);
      expect(component).toBeTruthy();
      expect(service).toBeDefined();
    });

    it(`ngOnInt receives data`, () => {
      component.ngOnInit();
      expect(component.pokemon).not.toBeNull();
    });

    it(`test toPokemonFunction`, () => {
      const expectedPokemon: Pokemon = castedPokemonData;
      const castedPokemon: Pokemon = toPokemon(pokemonData);
      expect(castedPokemon).toEqual(expectedPokemon);
    });
  });
});

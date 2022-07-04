import {
  TestBed,
  waitForAsync,
  ComponentFixture
} from '@angular/core/testing';
import { PokemonSimpleViewComponent } from './pokemon-simple-view.component';
import { PokemonService } from '../../../services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';

describe(`Pokemon Simple Component Test Suite `, () => {
  let fixture: ComponentFixture<PokemonSimpleViewComponent>;
  let component: PokemonSimpleViewComponent;
  let service: PokemonService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonSimpleViewComponent],
      providers: [PokemonService],
      imports: [HttpClientModule],
    }).compileComponents();
    fixture = TestBed.createComponent(PokemonSimpleViewComponent);
    component = fixture.debugElement.componentInstance;
    service = TestBed.inject(PokemonService);
  }));

  describe(`TesFunctional`, () => {
    it(`should create the app`, () => {
      component.pokemonUrl = '';
      const data = jest.spyOn(service, 'getPokemonData');
      expect(component.backgroundColor).toEqual('');
      expect(component).toBeTruthy();
      expect(service).toBeDefined();
      fixture.detectChanges();
      expect(data).toHaveBeenCalled();
      expect(component.backgroundColor).not.toBe('');
    });
  });
});

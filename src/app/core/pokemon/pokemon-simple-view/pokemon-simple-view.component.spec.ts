import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonSimpleViewComponent } from './pokemon-simple-view.component';

describe('PokemonSimpleViewComponent', () => {
  let component: PokemonSimpleViewComponent;
  let fixture: ComponentFixture<PokemonSimpleViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonSimpleViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonSimpleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

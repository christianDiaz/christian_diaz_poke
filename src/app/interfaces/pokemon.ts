export interface Pokemon {
  id: number;
  name: string;
  pokemonTypes: Array<string>;
  weigth: number;
  sprites?: Array<string>;
  moves: Array<string>;
  photo: string;
}

export interface Pokemon {
  id: number;
  name: string;
  pokemonTypes: Array<string>;
  weight: number;
  sprites?: Array<string>;
  moves: Array<string>;
  photo: string;
}

export interface Pokemon {
  id: number;
  name: string;
  pokemonTypes: Array<string>;
  weight: number;
  sprites?: Array<string>;
  moves: Array<string>;
  photo: string;
}

export const toPokemon = (pokemonData: any) => {
  return {
    id: pokemonData.id,
    name: pokemonData.name,
    moves: populateMoves(pokemonData.moves),
    sprites: populateSprites(pokemonData.sprites),
    pokemonTypes: populateTypes(pokemonData.types),
    weight: pokemonData.weight,
    photo: pokemonData.sprites.other.home.front_default,
  };
};

 const populateSprites = (sprites: any) => {
  let spritesData: string[] = [];
  sprites.back_default !== null && spritesData.push(sprites.back_default);
  sprites.back_female !== null && spritesData.push(sprites.back_female);
  sprites.back_shiny !== null && spritesData.push(sprites.back_shiny);
  sprites.back_shiny_female !== null &&
    spritesData.push(sprites.back_shiny_female);
  sprites.front_default !== null && spritesData.push(sprites.front_default);
  sprites.front_female !== null && spritesData.push(sprites.front_female);
  sprites.front_shiny !== null && spritesData.push(sprites.front_shiny);
  sprites.front_shiny_female !== null &&
    spritesData.push(sprites.front_shiny_female);
  return spritesData;
};

 const populateMoves = (moves: Array<any>) => {
  return moves.map((m) => m.move.name);
};

 const populateTypes = (types: Array<any>) => {
  return types.map((t) => t.type.name);
};

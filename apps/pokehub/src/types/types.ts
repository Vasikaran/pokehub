export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonType {
  type: {
    name: string;
  };
}

export interface PokemonStat {
  base_stat: number;
  stat: {
    name: string;
  };
}

export interface PokemonAbility {
  ability: {
    name: string;
  };
  is_hidden: boolean;
}

export interface PokemonDetails {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites?: {
    front_default?: string;
  };
  types?: PokemonType[];
  stats?: PokemonStat[];
  abilities?: PokemonAbility[];
}

export interface PokemonState {
  pokemons: Pokemon[];
  pokemonDetails: PokemonDetails | null;
  loading: boolean;
  error: string | null;
  count: number;
  currentPage: number;
  pageSize: number;
}

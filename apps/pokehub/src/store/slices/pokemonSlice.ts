import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export interface Pokemon {
  name: string;
  url: string;
  // Add more properties as needed
}

interface PokemonState {
  pokemons: Pokemon[];
  pokemonDetails: any | null;
  loading: boolean;
  error: string | null;
  count: number;
  currentPage: number;
  pageSize: number;
}

const initialState: PokemonState = {
  pokemons: [],
  pokemonDetails: null,
  loading: false,
  error: null,
  count: 0,
  currentPage: 0,
  pageSize: 10,
};

// Async thunk for fetching pokemons
export const fetchPokemons = createAsyncThunk(
  "pokemon/fetchPokemons",
  async ({ limit = 10, offset = 0 }: { limit: number; offset: number }) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );
    const data = await response.json();
    return data;
  }
);

// Async thunk for fetching a single pokemon's details
export const fetchPokemonDetails = createAsyncThunk(
  "pokemon/fetchPokemonDetails",
  async (name: string) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();
    return data;
  }
);

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    resetPokemonDetails: (state) => {
      state.pokemonDetails = null;
    },
    setPagination: (
      state,
      action: PayloadAction<{ page: number; pageSize: number }>
    ) => {
      state.currentPage = action.payload.page;
      state.pageSize = action.payload.pageSize;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch pokemons cases
      .addCase(fetchPokemons.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        state.loading = false;
        state.pokemons = action.payload.results;
        state.count = action.payload.count;
      })
      .addCase(fetchPokemons.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch pokemons";
      })
      // Fetch pokemon details cases
      .addCase(fetchPokemonDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPokemonDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.pokemonDetails = action.payload;
      })
      .addCase(fetchPokemonDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch pokemon details";
      });
  },
});

export const { resetPokemonDetails, setPagination } = pokemonSlice.actions;
export default pokemonSlice.reducer;

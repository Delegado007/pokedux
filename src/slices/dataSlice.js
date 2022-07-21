import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setLoading } from './uiSlice';
import { getPokemon, getPokemonDetails } from "../api";

const initialState = {
  pokemons: [],
}

export const fetchPokemonsWhitDetails = createAsyncThunk(
  'data/fetchPokemonsWhitDetails',
  async (_, { dispatch }) => {
    // dispatch loader
    // fetch
    // dispatch loader
    dispatch(setLoading(true))
    const pokemonsRes = await getPokemon();
    const pokemonsDetailed = await Promise.all(
      pokemonsRes.map((pokemon) => getPokemonDetails(pokemon))
    );
    dispatch(setPokemons(pokemonsDetailed));
    dispatch(setLoading(false));
  }
);

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    setFavorite: (state, action) => {
      const currentPokemonIndex = state.pokemons.findIndex(
        (pokemon) => {
          return pokemon.id === action.payload.pokemonId;
        }
      )
      if (currentPokemonIndex >= 0) {
        const isFavorite = state.pokemons[currentPokemonIndex].favorite;
        state.pokemons[currentPokemonIndex].favorite = !isFavorite;
      }
    }
  },
});

export const { setFavorite, setPokemons } = dataSlice.actions;
console.log(dataSlice);
export default dataSlice.reducer;
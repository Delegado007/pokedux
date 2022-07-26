import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setLoading } from './uiSlice';
import { getPokemon, getPokemonDetails } from "../api";
// import { setSearch } from "./searchSlice";

const initialState = {
  pokemons: [],
  pokemonsSearched: [],
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
    let pokemones = []
    pokemonsDetailed.map((elem) => {
      let { name, id, types, sprites: { front_default } } = elem;
      pokemones.push({ name, id, types, image: front_default });
    })
    dispatch(setPokemons(pokemones));
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
    },
    setSearch: (state, action) => {
      const imputValue = action.payload.toLocaleLowerCase();
      if (action.payload.length > 0) {
        const result = state.pokemons.filter(
          (pokemon) => {
            return pokemon.name.includes(imputValue)
          }
        )
        state.pokemonsSearched = result
      } else {
        state.pokemonsSearched = []
      }
    },
  },
});

export const { setFavorite, setPokemons, setSearch } = dataSlice.actions;

export default dataSlice.reducer;
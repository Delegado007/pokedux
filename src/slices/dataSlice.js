import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setLoading } from './uiSlice';
import { getPokemon, getPokemonDetails } from "../api";
import { useSelector } from "react-redux";
// import { setSearch } from "./searchSlice";

const initialState = {
  pokemons: [],
  pokemonsSearched: [],
  pagination: {
    limit: 10,
    offset: 0,
  },
}

export const fetchPokemonsWhitDetails = createAsyncThunk(
  'data/fetchPokemonsWhitDetails',
  async (paginationValues, { dispatch }) => {
    // dispatch loader
    // fetch
    // dispatch loader
    dispatch(setLoading(true))
    const pokemonsRes = await getPokemon(paginationValues.limit, paginationValues.offset);
    const pokemonsDetailed = await Promise.all(
      pokemonsRes.map((pokemon) => getPokemonDetails(pokemon))
    );
    let pokemones = []
    pokemonsDetailed.map((elem) => {
      let { name, id, types, sprites: { other: { dream_world: front_default } } } = elem;
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
    setPagination: (state, action) => {
      state.pagination = action.payload
    }
  },
});

export const { setFavorite, setPokemons, setSearch, setPagination } = dataSlice.actions;

export default dataSlice.reducer;
import React, { useEffect } from 'react';
import { Logo } from './components/Logo';
import { Searcher } from './components/Search';
import { PokemonList } from './components/ListOfPokemon';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { fetchPokemonsWhitDetails } from './slices/dataSlice';
import { GlobalStyles } from './GlobalStyles';

export const App = () => {

  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
  const searchedPokemons = useSelector((state) => state.data.pokemonsSearched, shallowEqual);
  const valueImputSearch = useSelector((state) => state.ui.valueImputSearch);
  const loading = useSelector((state) => state.ui.loading);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchPokemonsWhitDetails());
  }, [dispatch]);

  return (
    <div className="App">
      <GlobalStyles />
      <Logo />
      <Searcher />
      <PokemonList pokemons={pokemons} searchedPokemons={searchedPokemons} valueImputSearch={valueImputSearch} />
    </div>

  );
}

